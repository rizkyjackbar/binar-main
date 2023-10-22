const router = require("express").Router()

const userController = require("../controllers/userController")
const authenticate = require("../middlewares/authenticate")
const checkRole = require("../middlewares/checkRole")

router.get("/", authenticate, userController.findUsers)

router.get("/:id", authenticate, userController.findUserById)
router.patch(
  "/admin/:id",
  authenticate,
  checkRole("superadmin"),
  userController.updateUser
)
router.delete(
  "/admin/:id",
  authenticate,
  checkRole("superadmin"),
  userController.deleteUser
)

router.patch(
  "/member/:id",
  authenticate,
  checkRole("superadmin"),
  userController.updateUser
)
router.delete(
  "/member/:id",
  authenticate,
  checkRole("superadmin"),
  userController.deleteUser
)

module.exports = router
