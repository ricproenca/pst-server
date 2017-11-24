var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res) {
  res.render("index", {
    project: "pst-server",
    title: "Project School Timetables API",
    description: "for automatic generation of timetables for schools"
  });
});

module.exports = router;
