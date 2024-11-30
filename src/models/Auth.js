const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema({
  user_id: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  foto: { type: String, default: "/DefaultProfilePicture.png" },
  username: { type: String, required: true },
});

module.exports = mongoose.models.Auth || mongoose.model("Auth", AuthSchema);
