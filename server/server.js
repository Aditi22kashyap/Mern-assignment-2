const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware to handle JSON parsing
app.use(express.json());

// Middleware to handle form data or URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Enable CORS
app.use(cors());

// Additional code and configurations can be added here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
