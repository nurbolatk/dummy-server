const { response } = require("express");
const express = require("express");
const serverless = require("serverless-http");
// const cors = require("cors");
const app = express();

const router = express.Router();

router.get("/test/route/1", (req, res) => {
  const response = {
    aloha: true,
  };
  res.json(response);
});

router.get("/", (req, res) => {
  res.json({ hello: "API is running..." });
});

app.use("/.netlify/functions/api", router);

// const PORT = process.env.PORT || 5439;
// app.listen(
//   PORT,
//   console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
// );
module.exports = app;
module.exports.handler = serverless(app);
