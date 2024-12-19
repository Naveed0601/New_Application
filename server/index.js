const express = require('express');
const testapi = require('./routes/test');
const cors = require("cors");

const app = express();
const corsOptions = {
    origin: 'https://inspiring-lens-442115-p5.de.r.appspot.com',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  };
  
app.use(cors(corsOptions));

app.use('/', testapi);

const port = 1002;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
