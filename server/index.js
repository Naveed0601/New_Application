const express = require('express');
const testapi = require('./routes/test');
const app = express();

app.use('/', testapi);

const port = 1002;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
