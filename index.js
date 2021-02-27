const { response } = require("express");
const express = require("express");
// const cors = require("cors");
const app = express();

app.get("/test/route/1", (req, res) => {
  const response = {
    aloha: true,
  };
  res.json(response);
});

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5439;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
