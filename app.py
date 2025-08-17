from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array, load_img
import numpy as np
import joblib
import os

app = Flask(__name__)
CORS(app)

# Constants
MODEL_PATH = 'blood_group_model.h5'
IMG_SIZE = (224, 224)

# Load model
model = load_model(MODEL_PATH)

# Load the label encoder
encoder_path = os.path.join(os.path.dirname(__file__), 'label_encoder.pkl')
encoder = joblib.load(encoder_path)

# Preprocessing function
def prepare_image(image_path):
    img = load_img(image_path, target_size=IMG_SIZE)
    img = img_to_array(img) / 255.0
    img = np.expand_dims(img, axis=0)
    return img

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        if 'image' not in request.files:
            return jsonify({'error': 'No image file provided'}), 400

        file = request.files['image']
        if file.filename == '':
            return jsonify({'error': 'Empty filename'}), 400

        os.makedirs('uploads', exist_ok=True)
        file_path = os.path.join('uploads', file.filename)
        file.save(file_path)

        img = prepare_image(file_path)
        prediction = model.predict(img)
        predicted_class = np.argmax(prediction)
        blood_group = encoder.inverse_transform([predicted_class])[0]

        # Optional: clean up uploaded file
        os.remove(file_path)

        return jsonify({'predicted_blood_group': blood_group})
    except Exception as e:
        print("Prediction error:", e)  # Logs error to console
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
