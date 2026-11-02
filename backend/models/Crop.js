const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  cropName: { type: String, required: true },
  variety: String,
  sowingDate: Date,
  expectedHarvestDate: Date,
  status: {
    type: String,
    enum: ["Planned", "Growing", "Flowering", "Harvested", "Disease-Affected"],
    default: "Planned"
  },
  irrigationSchedule: String,
  fertilizerSchedule: String,
  pesticideSchedule: String,
  notes: String,
  images: [String],
  healthScore: { type: Number, default: 80 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Crop", cropSchema);
