const axios = require('axios');

const {BookingRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');
const {serverConfig} = require('../config');

const db = require('../models');
const { StatusCodes } = require('http-status-codes');

async function createBooking(data){
    return new Promise((resolve,reject)=>{
            const result = db.sequelize.transaction(async function bookingImpl(t){
                const flight = await axios.get(`${serverConfig.FLIGHT_SERVICE}/api/v1/flights/${data.flightId}`);
                if (data.noOfSeats > flight.totalSeats){
                    reject(new AppError('Not enough seats available', StatusCodes.BAD_REQUEST));
                }
                resolve(true);
            });

});
};

module.exports = {
    createBooking

}