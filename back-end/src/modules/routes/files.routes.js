const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("files route ok");
});

module.exports = router;
