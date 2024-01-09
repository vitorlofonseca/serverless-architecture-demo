const express = require("express");
var cors = require("cors");

const app = express();
app.use(cors());

// Route for SSR
app.get("/", (req, res) => {
  res.send("This is a hello world from your NodeJS backend");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
