import React, { useState } from "react";
import "./BloodGroupForm.css";

function BloodGroupForm() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [predictedGroup, setPredictedGroup] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedImage) {
      alert("Please select an image.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append('image', selectedImage);

      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to predict blood group');
      }

      const data = await response.json();
      setPredictedGroup(data.predicted_blood_group);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to predict blood group. Please try again.');
    }
  };

  return (
    <div className="blood-form-container">
      <h2>Blood Group Detection</h2>
      <form onSubmit={handleSubmit} className="blood-form">
        <input type="file" accept="image/*" onChange={handleImageChange} required />
        <button type="submit">Predict</button>
      </form>

      {predictedGroup && (
        <div className="result">
          <h3>Predicted Blood Group:</h3>
          <p>{predictedGroup}</p>
        </div>
      )}
    </div>
  );
}

export default BloodGroupForm;
