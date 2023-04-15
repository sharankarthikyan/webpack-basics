const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.use("/", express.static(path.join(__dirname, "../dist")));

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
