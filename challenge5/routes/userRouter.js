const router = require("express").Router()

const userController = require("../controllers/userController")
const authenticate = require("../middlewares/authenticate")
const checkRole = require("../middlewares/checkRole")

router.get("/", authenticate, userController.findUsers)

router.get("/:id", authenticate, userController.findUserById)
router.patch(
  "/admin/:id",
  authenticate,
  checkRole("Superadmin"),
  userController.updateUser
)
router.delete(
  "/admin/:id",
  authenticate,
  checkRole("Superadmin"),
  userController.deleteUser
)

router.patch(
  "/member/:id",
  authenticate,
  checkRole("Superadmin"),
  userController.updateUser
)
router.delete(
  "/member/:id",
  authenticate,
  checkRole("Superadmin"),
  userController.deleteUser
)

module.exports = router
