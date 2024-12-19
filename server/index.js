const express = require('express');
const testapi = require('./routes/test');
const cors = require("cors");

const app = express();
app.use(cors());

app.use('/', testapi);

const port = 1002;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
