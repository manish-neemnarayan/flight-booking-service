const { StatusCodes } = require("http-status-codes");
const { BookingService} = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const { AppError } = require("../utils/errors");

/**
 * Post : 
 */

async function createBooking(req, res) {
    try {
        console.log("controller body parsing" + req.body)
        const payload = {
            flightId: req.body.flightId,
            userId: req.body.userId,
            noOfSeats: req.body.noOfSeats
        }
        await BookingService.createBooking(payload);

        SuccessResponse.data = "Booking created successfully";
        return res  
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

module.exports = {
    createBooking
}