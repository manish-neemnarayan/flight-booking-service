const express = require("express");
const { infoContorller } = require("../../controllers");

const  router = express.Router();

router.get("/info", infoContorller.info);

module.exports = router;