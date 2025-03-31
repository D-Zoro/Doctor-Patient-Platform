const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: { type: Date, required: true },
  time: { type: String, required: true }, // e.g., "10:30 AM"
  reason: { type: String, required: true },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected", "completed"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Appointment", appointmentSchema);
