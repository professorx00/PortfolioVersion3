const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.render("index",{"index":true});
});
router.get("/port", (req, res) => {
  res.render("port",{"port":true});
});
router.get("/exp", (req, res) => {
  res.render("exp",{"exp":true});
});
router.get("/contact", (req, res) => {
  res.render("contact",{"contact":true});
});


module.exports = router;