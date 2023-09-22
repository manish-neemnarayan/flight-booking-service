const { StatusCodes } = require("http-status-codes");
const { Booking } = require("../models");
const { CrudRepository } = require("./index");;

class BookingRepository extends CrudRepository {
    constructor(model) {
        super(model);
    }
};

module.exports = BookingRepository;
