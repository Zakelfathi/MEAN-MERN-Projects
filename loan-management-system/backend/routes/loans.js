var express = require("express");
var router = express.Router();

const loansModel = require("../models/loans");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
