const router = require("express").Router()

const carController = require("../controllers/carController")
const authenticate = require("../middlewares/authenticate")
const checkRole = require("../middlewares/checkRole")
const upload = require("../middlewares/uploader")

router
  .route("/")
  .post(
    checkRole("Superadmin", "Admin"),
    authenticate,
    upload.single("image"),
    carController.createCar
  )
  .get(carController.findAllCars)

router
  .route("/:id")
  .get(carController.findCarById)
  .delete(
    checkRole("Superadmin", "Admin"),
    authenticate,
    carController.deleteCar
  )
  .patch(
    checkRole("Superadmin", "Admin"),
    authenticate,
    upload.single("image"),
    carController.updateCar
  )

module.exports = router
