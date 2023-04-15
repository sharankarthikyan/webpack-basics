const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, "../dist/nature.html");
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(contentFromHtmlFile);
});

app.use("/", express.static(path.resolve(__dirname, "../dist")));

app.listen(3001, () => {
  console.log(`Listening on port 3001`);
});
