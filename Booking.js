const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  doctorType: String,
  slotId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Slot"
  },
  date: String,
  time: String
});

module.exports = mongoose.model("Booking", bookingSchema);
