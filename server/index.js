const express = require('express');
const https = require('https');
const fs = require('fs');
const cors = require('cors');
const testapi = require('./routes/test'); // Your API routes

const app = express();
const corsOptions = {
    origin: 'https://splendid-window-406819.de.r.appspot.com/',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  };
app.use(cors(corsOptions));  

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Backend API routes

app.use('/api', testapi);

const port = 1002; // Backend port

// HTTPS configuration using local self-signed certificates
const options = {
  key: fs.readFileSync('./ssl/privkey.pem'),
  cert: fs.readFileSync('./ssl/fullchain.pem'),
};

// Create HTTPS server
https.createServer(options, app).listen(port, () => {
  console.log('Server running on https://localhost:${port} with HTTPS  ');
});