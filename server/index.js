const express = require('express');
const path = require('path');
const testapi = require('./routes/test');
const cors = require('cors');

const app = express();
app.use(cors());

// Serve React static files
console.log('Serving static files from:', path.join(__dirname, '../build'));

app.use(express.static(path.join(__dirname, '../build'))); // Adjust path if needed

// Backend API routes
app.use('/api', testapi);

// Fallback to React index.html for any other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html')); // Adjust path if needed
});

const port = 1002;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
