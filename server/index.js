const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const testapi = require('./routes/test'); // Assuming you have a route file for your API

const app = express();
app.use(cors()); // Enable CORS if you're serving from different domains

// Backend API routes
app.use('/api', testapi);

const port = 1002; // Backend port

// HTTPS configuration (update the paths to your generated SSL certificate and key)
const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/back-end.xyz/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/back-end.xyz/fullchain.pem'),
};

// Create HTTPS server
https.createServer(options, app).listen(port, () => {
  console.log(`Server running on https://back-end.xyz:${port} with HTTPS`);
});
