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
![WhatsApp Image 2025-04-29 at 10 41 53_ce24a728](https://github.com/user-attachments/assets/a193d259-4b4f-4a84-a9ee-1e4acf78a830)
![WhatsApp Image 2025-04-29 at 10 41 54_b54717b9](https://github.com/user-attachments/assets/f3cd0902-eed5-4f7d-ad05-dd60f67e06e3)
![WhatsApp Image 2025-04-29 at 10 42 02_62693d51](https://github.com/user-attachments/assets/2c3d1b54-d4f8-4a5f-a773-0c45429bb2f4)
![WhatsApp Image 2025-04-29 at 10 42 01_1a854199](https://github.com/user-attachments/assets/8ea6bcbc-41b5-4439-ac88-edc1cb2de86e)
![WhatsApp Image 2025-04-29 at 10 42 02_c4615b2a](https://github.com/user-attachments/assets/f0d3cc48-ac85-407a-9067-52b82922ca60)
![WhatsApp Image 2025-04-29 at 10 42 01_c3c4d502](https://github.com/user-attachments/assets/a8415286-e6b6-4f8c-9538-ae2582605beb)









