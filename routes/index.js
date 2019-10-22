const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.sendFile("/index.html");
});
router.get("/port", (req, res) => {
  res.sendFile("/portfolio.html");
});