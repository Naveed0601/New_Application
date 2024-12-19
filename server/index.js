const express = require('express');
const path = require('path');
const testapi = require('./routes/test');
const cors = require('cors');

const app = express();
app.use(cors());

// Backend API routes
app.use('/api', testapi);

const port = 1002;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
