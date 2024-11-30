const mongoose = require("mongoose");

const ScheduleSchema = new mongoose.Schema({
  schedule_id: { type: String, required: true, unique: true },
  pet_id: { type: String, required: true },
  nama: { type: String },
  tanggal: { type: Date },
  jam: { type: String },
  tempat: { type: String },
  catatan: { type: String },
});

module.exports = mongoose.model("Schedule", ScheduleSchema);
