const express = require("express");
const router = express.Router();

router.get("/verify", async (req, res) => {
    var id = req.cookie.id;
    if (id == null || id == ""){
        return res.redirect("../views/welcome")
    }
    next();
});

module.exports = router;