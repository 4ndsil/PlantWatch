function validate(req, res, next) {
    let plantid = req.cookies.plantId
    let deviceId = req.cookies.deviceId
    if (!plantid || !deviceId) {
        res.render("welcome")
    } else {
        next()
    }
};

module.exports = validate;