const mongoose = require("mongoose");

const HealthTrackingSchema = new mongoose.Schema({
  tracking_id: { type: String, required: true, unique: true },
  pet_id: { type: String, required: true },
  nama: { type: String },
  riwayat_penyakit: { type: String },
  alergi: { type: String },
  vaksinasi: { type: String },
});

module.exports = mongoose.model("HealthTracking", HealthTrackingSchema);
