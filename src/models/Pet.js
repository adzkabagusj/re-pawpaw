const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema({
  aktivitas_id: { type: String, required: true },
  foto: { type: String },
  caption: { type: String },
  tanggal: { type: Date },
});

const PetSchema = new mongoose.Schema({
  pet_id: { type: String, required: true, unique: true },
  user_id: { type: String, required: true },
  tipe: { type: String },
  nama: { type: String },
  tanggal_lahir: { type: Date },
  umur: { type: Number },
  breed: { type: String },
  foto: { type: String },
  aktivitas: [ActivitySchema],
});

module.exports = mongoose.model("Pet", PetSchema);
