import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Appointment.css';

const BookingForm = () => {
  const [slots, setSlots] = useState([]);
  const [selectedDoctorType, setSelectedDoctorType] = useState('');
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const fetchSlots = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/slots');
      console.log('Fetched slots:', response.data);
      setSlots(response.data);
    } catch (error) {
      console.error('Error fetching slots:', error);
    }
  };

  useEffect(() => {
    fetchSlots();
  }, []);

  const availableSlots = slots.filter((slot) => {
    return slot.doctorType === selectedDoctorType && !slot.isBooked;
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedSlot) {
      alert('Please select a slot.');
      return;
    }
    
    if (!userDetails.name || !userDetails.email || !userDetails.phone) {
      alert('Please fill in all user details.');
      return;
    }

    try {
      // Find the selected slot object
      const slotToBook = slots.find(slot => slot._id === selectedSlot);
      if (!slotToBook) {
        alert('Selected slot not found');
        return;
      }

      console.log('Booking slot:', slotToBook);
      
      // Send the booking request
      const response = await axios.post('http://localhost:5000/api/slots', {
        time: slotToBook.time,
        date: slotToBook.date,
        doctorType: slotToBook.doctorType,
        userDetails: {
          name: userDetails.name,
          email: userDetails.email,
          phone: userDetails.phone
        }
      });

      if (response.data) {
        alert('Booking successful!');
        
        // Reset form
        setUserDetails({ name: '', email: '', phone: '' });
        setSelectedDoctorType('');
        setSelectedSlot(null);
        
        // Update slots with the new data
        setSlots(response.data);
      }
    } catch (error) {
      console.error('Booking error:', error);
      if (error.response?.status === 404) {
        alert('This slot is no longer available. Please select another slot.');
        fetchSlots(); // Refresh slots to show current availability
      } else {
        alert(error.response?.data?.message || 'Booking failed.');
      }
    }
  };

  return (
    <div className="booking-form-container">
      <h2>Book an Appointment</h2>

      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={userDetails.name}
            onChange={handleInputChange}
            required
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleInputChange}
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={userDetails.phone}
            onChange={handleInputChange}
            required
            placeholder="Enter your phone number"
          />
        </div>

        <div className="form-group">
          <label>Select Doctor Type:</label>
          <select
            value={selectedDoctorType}
            onChange={(e) => {
              setSelectedDoctorType(e.target.value);
              setSelectedSlot(null);
            }}
            required
          >
            <option value="">-- Select --</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Neurology">Neurology</option>
          </select>
        </div>

        {selectedDoctorType && (
          <div className="form-group">
            <label>Available Slots:</label>
            {availableSlots.length > 0 ? (
              <select
                value={selectedSlot || ''}
                onChange={(e) => setSelectedSlot(e.target.value)}
                required
              >
                <option value="">-- Select --</option>
                {availableSlots.map((slot) => (
                  <option key={slot._id} value={slot._id}>
                    {slot.date} at {slot.time}
                  </option>
                ))}
              </select>
            ) : (
              <p className="no-slots-message">No available slots for this doctor type</p>
            )}
          </div>
        )}

        <button 
          type="submit" 
          className="submit-button" 
          disabled={!selectedSlot || availableSlots.length === 0}
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
