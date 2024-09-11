// backend/server.js
const express = require('express');
const cors = require('cors');
const { MercoaClient } = require('@mercoa/javascript'); // Importing in CommonJS syntax

const app = express();
const PORT = 5000;

// Initialize MercoaClient
const mercoa = new MercoaClient({
  token: "c09dd363-77e2-440c-8883-6c70405ed270",
});

// Use middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);


  

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
