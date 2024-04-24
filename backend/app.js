const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("The iHadis server is running on port " + port);
});

app.listen(port, () => {
  console.log(`iHadis app listening on port ${port}`);
});
