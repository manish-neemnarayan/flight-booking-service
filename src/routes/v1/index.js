const express = require("express");
const { infoContorller, BookingController } = require("../../controllers");
const bookingRouter = require("./booking");
const  router = express.Router();

router.use("/booking", bookingRouter);


// testing purpose
router.get("/info", infoContorller.info);

module.exports = router;