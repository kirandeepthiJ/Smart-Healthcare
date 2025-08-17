const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Slot schema
const slotSchema = new mongoose.Schema({
  time: String,
  date: String,
  doctorType: String,
  isBooked: {
    type: Boolean,
    default: false
  },
  userDetails: {
    name: String,
    email: String,
    phone: String,
    bookingTime: Date
  }
});

const Slot = mongoose.model("Slot", slotSchema);

// POST /api/slots - Create or Book slots
router.post("/", async (req, res) => {
  try {
    if (Array.isArray(req.body)) {
      await Slot.deleteMany({});
      const savedSlots = await Slot.insertMany(req.body);
      return res.status(201).json(savedSlots);
    }

    const { time, date, doctorType, userDetails } = req.body;
    const slot = await Slot.findOne({ time, date, doctorType, isBooked: false });
    if (!slot) {
      return res.status(404).json({ message: "No available slot found" });
    }

    slot.isBooked = true;
    slot.userDetails = {
      ...userDetails,
      bookingTime: new Date()
    };

    await slot.save();
    const allSlots = await Slot.find({}).sort({ date: 1, time: 1 });
    res.json(allSlots);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /api/slots
router.get("/", async (req, res) => {
  try {
    const slots = await Slot.find({}).sort({ date: 1, time: 1 });
    res.json(slots);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
