const express = require("express");
var cors = require("cors");

const app = express();
app.use(cors());

// Route for SSR
app.get("/", (req, res) => {
  res.send([
    "Fender Stratocaster",
    "Fender Telecaster",
    "Gibson SG",
    "DW 50th Anniversary",
    "DW 6-piece",
  ]);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
