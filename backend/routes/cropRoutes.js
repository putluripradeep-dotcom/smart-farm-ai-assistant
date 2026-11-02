const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const Crop = require("../models/Crop");

const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
  try {
    const crops = await Crop.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(crops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", authMiddleware, async (req, res) => {
  try {
    const crop = await Crop.create({
      ...req.body,
      userId: req.user.id
    });
    res.status(201).json(crop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const crop = await Crop.findOne({ _id: req.params.id, userId: req.user.id });
    if (!crop) {
      return res.status(404).json({ message: "Crop not found." });
    }
    res.json(crop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
