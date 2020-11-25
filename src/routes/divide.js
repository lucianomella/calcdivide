const { Router } = require('express');
const utils = require("./utils");
const router = Router();

router.post("/", (req, res) => {
    let body = req.body;
    if (utils.validaDatos(body)) {
        return res.status(200).send(String(Number(body.a) + Number(body.b)));
    } else {
        return res.status(400).send("Error en datos");
    }
})


module.exports = router;