const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const Expense = require("../models/Expense");

const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
  try {
    const expenses = await Expense.find({ userId: req.user.id }).sort({ date: -1 });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", authMiddleware, async (req, res) => {
  try {
    const expense = await Expense.create({
      ...req.body,
      userId: req.user.id
    });
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
