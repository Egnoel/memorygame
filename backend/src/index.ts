import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express!');
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost/memorygame')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});