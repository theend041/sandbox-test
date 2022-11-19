const express = require("express");

const port = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.send(`Working on ${ port }`);
});

app.listen(port, () => {
  console.log(`working on ${ port }`)
})