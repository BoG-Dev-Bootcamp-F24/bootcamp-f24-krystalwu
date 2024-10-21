const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define a train schema directly within the server file
const TrainSchema = new mongoose.Schema({
  DESTINATION: String,
  DIRECTION: String,
  EVENT_TIME: String,
  HEAD_SIGN: String,
  LINE: String,
  NEXT_ARR: String,
  STATION: String,
  TRAIN_ID: String,
  WAITING_SECONDS: String,
  WAITING_TIME: String,
  DELAY: String
});

// Create a Train model directly within the server file
const Train = mongoose.model('Train', TrainSchema);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/trains', async (req, res) => {
  try {
    const trains = await Train.find();
    res.json(trains);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
