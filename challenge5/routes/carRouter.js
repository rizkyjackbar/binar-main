const router = require("express").Router()

const carController = require("../controllers/carController")
const authenticate = require("../middlewares/authenticate")
const checkRole = require("../middlewares/checkRole")
const upload = require("../middlewares/uploader")

router
  .route("/")
  .post(
    checkRole("super_admin", "Admin"),
    authenticate,
    upload.single("image"),
    carController.createCar
  )
  .get(authenticate, carController.findAllCars)

router
  .route("/:id")
  .get(authenticate, carController.findCarById)
  .delete(
    checkRole("superadmin", "Admin"),
    authenticate,
    carController.deleteCar
  )
  .patch(
    checkRole("superadmin", "Admin"),
    authenticate,
    upload.single("image"),
    carController.updateCar
  )

module.exports = router
