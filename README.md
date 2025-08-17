# Smart-Healthcare
Smart Healthcare is an integrated web-based healthcare solution that leverages Deep Learning for blood group detection from fingerprint images and provides a Doctor Appointment Booking system — delivering a seamless and efficient experience for both patients and healthcare providers.

🚀 Features

🔬 Blood Group Detection:

Uses fingerprint images and a trained Deep Learning model (CNN) built with TensorFlow & Keras.

Provides a non-invasive, quick, and cost-effective alternative to traditional blood tests.

👨‍⚕️ Doctor Appointment Booking:

Patients can book available time slots with doctors.

Doctors/hospitals can manage appointments efficiently.

🌐 Web Integration:

Backend powered by Flask & MongoDB.

Frontend built with React.js, styled using HTML5, CSS3, and Bootstrap.

Model integration through Google Colab & Flask API.

🛠️ Tech Stack

Frontend: React.js, HTML5, CSS3, JavaScript, Bootstrap

Backend: Flask, MongoDB

Deep Learning: TensorFlow, Keras (trained in Google Colab)

Other Tools: Python, REST API

📂 Project Structure
Smart-Healthcare/
│── backend/              # Flask backend & API routes
│── frontend/             # React.js frontend
│── model/                # Deep Learning model & scripts
│── static/               # Static assets (CSS, JS, Images)
│── templates/            # HTML templates (if Flask rendering used)
│── requirements.txt      # Python dependencies
│── package.json          # React dependencies
│── README.md             # Project documentation

⚙️ Installation & Setup
🔹 Clone the Repository
git clone https://github.com/your-username/smart-healthcare.git
cd smart-healthcare

🔹 Backend Setup (Flask + Model)
cd backend
pip install -r requirements.txt
python app.py

🔹 Frontend Setup (React.js)
cd frontend
npm install
npm start


📊 Deep Learning Model

Input: Fingerprint image (224x224)

Preprocessing: Normalization (/255.0)

Model: CNN with Softmax output for multi-class classification

Output: Predicted Blood Group (A, B, AB, O, +ve/-ve)

📸 Screenshots
![WhatsApp Image 2025-04-29 at 10 41 53_38245936](https://github.com/user-attachments/assets/fe8a7656-b6bd-4f7a-b75f-61b5f18da7fd)


