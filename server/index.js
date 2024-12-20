const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const testapi = require('./routes/test');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Backend API routes
app.use('/api', testapi);

const port = 1002;

// HTTPS configuration (update the paths to your generated SSL certificate and key)
console.log( (path.join(__dirname, 'private.key')));
const options = {
    key: fs.readFileSync(path.join(__dirname, 'private.key')),
    cert: fs.readFileSync(path.join(__dirname, 'certificate.crt')),
};


https.createServer(options, app).listen(port, () => {
    console.log(`Server running on port ${port} with HTTPS and `);
});
