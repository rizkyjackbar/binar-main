function carMiddleware(req, res, next) {
    const id = req.params.id;
    const car = res.locals.carsList.find((car) => car.id == id);
  
    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }
  
    res.locals.car = car;
    next();
  }
  
  module.exports = {
    carMiddleware,
  };
  