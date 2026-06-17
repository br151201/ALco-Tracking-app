const express = require("express");
const app = express();

app.use(express.json());

//Test route
app.get("/",(req, res) => {
  res.send("Parcel Tracking API is running");
});

app.listen(5000,() => console.log("Server Running on port 5000"));
