// server/server.js
const express = require('express');
const app = express();
const crypto = require('crypto');
require('dotenv').config();

// Generate and store a private key securely (in memory for simplicity)
const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
});

// Implement middleware and routes here

const port = process.env.SERVER_PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});