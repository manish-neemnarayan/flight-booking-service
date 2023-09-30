const axios = require("axios");
const { StatusCodes } = require("http-status-codes");
const { BookingRepository } = require("../repositories");
const db = require("../models");
const { AppError } = require("../utils/errors");

async function createBooking(data) {

    return new Promise((resolve, reject) => {
        db.sequelize.transaction(async function bookingImpl(t) {
            const flight = await axios.get(`http://localhost:4000/api/v1/flight/${data.flightId}`);
            const flightData = flight.data.data;
            if(data.noOfSeats > flightData.totalSeats) {
                console.log("Not enough seats available");
                reject(new AppError("Not enough seats available", StatusCodes.BAD_REQUEST));
            }
            resolve(flight);
        })
    })

}

module.exports = {
    createBooking
}