const carsList = require("./cars.json");

function carsListMiddleware(req, res, next) {
  res.locals.carsList = carsList;
  next();
}

module.exports = {
  carsListMiddleware,
};
