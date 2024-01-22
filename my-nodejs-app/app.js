// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Node.js App with Express!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
