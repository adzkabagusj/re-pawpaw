const express = require("express");
const connectDB = require("./config/db"); // Import the database connection logic
require("dotenv").config(); // Load environment variables

const app = express();

// Middleware (optional, if needed for parsing JSON)
app.use(express.json());

// Connect to MongoDB
connectDB();

// Define a test route (to confirm the server is running)
app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
