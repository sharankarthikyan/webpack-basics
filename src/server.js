const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.get("/hello-world/", (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, "../dist/hello-world.html");
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(contentFromHtmlFile);
});

app.get("/nature/", (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, "../dist/nature.html");
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(contentFromHtmlFile);
});

app.use("/static", express.static(path.resolve(__dirname, "../dist")));

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
