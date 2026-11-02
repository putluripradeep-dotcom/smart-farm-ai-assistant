const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  cropId: { type: mongoose.Schema.Types.ObjectId, ref: "Crop" },
  category: {
    type: String,
    enum: ["Seed", "Fertilizer", "Pesticide", "Labor", "Water", "Irrigation", "Other"],
    required: true
  },
  amount: { type: Number, required: true },
  description: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Expense", expenseSchema);
