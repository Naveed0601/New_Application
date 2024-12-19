const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const testapi = require('./routes/test');
const cors = require('cors');

const app = express();
app.use(cors());

// Backend API routes
app.use('/api', testapi);

const port = 1002;

// HTTPS configuration (update the paths to your generated SSL certificate and key)
const options = {
    key: fs.readFileSync(path.join(__dirname, 'private.key')),  // Correct path
    cert: fs.readFileSync(path.join(__dirname, 'certificate.crt'))  // Correct path
};

https.createServer(options, app).listen(port, () => {
    console.log(`Server running on port ${port} with HTTPS`);
});
