const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    var id = req.cookies.deviceId;
    if (id == null || id == ""){
        return res.redirect("../views/welcome")
    }
    next();
});

module.exports = router;