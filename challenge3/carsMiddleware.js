// carsMiddleware.js
function carsMiddleware(req, res, next) {
  res.json(carsList);
}

module.exports = {
  carsMiddleware,
};
