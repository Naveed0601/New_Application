const express = require('express');
const testapi = require('./routes/test');
const cors = require("cors");

const app = express();
app.use(cors({
    origin: "https://inspiring-lens-442115-p5.de.r.appspot.com",
}));

app.use('/', testapi);

const port = 1002;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
