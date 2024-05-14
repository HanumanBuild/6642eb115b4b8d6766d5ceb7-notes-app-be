const express = require('express');
const app = express();
const PORT = 3001; // Hard-coded port as per the rules

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const authRoutes = require('./routes/auth');
const noteRoutes = require('./routes/notes');
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/notes', noteRoutes);

app.get('/', (req, res) => {
  res.send('Hello from Notes App Backend!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});