from sklearn.preprocessing import LabelEncoder
import pickle

# Use the same labels used during model training
labels = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
encoder = LabelEncoder()
encoder.fit(labels)

# Save the encoder in the current directory
with open('label_encoder.pkl', 'wb') as f:
    pickle.dump(encoder, f)
