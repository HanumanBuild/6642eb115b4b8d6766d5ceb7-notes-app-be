const express = require('express');
const app = express();
const PORT = 3001; // Hard-coded port as per the rules

app.get('/', (req, res) => {
  res.send('Hello from Notes App Backend!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});