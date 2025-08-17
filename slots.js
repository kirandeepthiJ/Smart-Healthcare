const express = require('express');
const Slot = require('../models/Slot');
const router = express.Router();

router.get('/', async (req, res) => {
  const { doctorType } = req.query;
  const slots = await Slot.find({ doctorType, isBooked: false });
  res.json(slots);
});

module.exports = router;
