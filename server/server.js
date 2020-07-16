const express = require("express");
const path = require("path");
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, "../client/dist")));


app.listen(port, () => {
  console.log(`Nice job, you're connected!`);
});
