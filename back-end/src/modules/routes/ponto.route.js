const express = require("express");
const router = express.Router();
const toDay  = require("../ponto/ponto.service");
router.get("/", (req, res) => {
    res.send("ponto route ok" + toDay);
    document.write("lallalallalala")
    res.send(toDay);
});

module.exports = router;

