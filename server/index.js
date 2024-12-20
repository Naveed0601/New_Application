const express = require('express');
const cors = require('cors');
const testapi = require('./routes/test'); // Your API routes

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Backend API routes
app.use('/api', testapi);

const port = 1002; // Backend port

// Create HTTP server (no need for HTTPS options)
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
