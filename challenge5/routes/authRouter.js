const router = require("express").Router()

const Auth = require("../controllers/authController")
const Authenticate = require("../middlewares/authenticate")
const checkRole = require("../middlewares/checkRole")

router.post("/superadmin/login", Auth.login)

router.post(
  "/admin/register",
  Authenticate,
  checkRole(["Superadmin"]),
  Auth.register
)

router.post("/admin/login", Auth.login)

router.post("/member/register", Auth.register)
router.post("/member/login", Auth.login)

router.get("/verify", Authenticate, Auth.checkCurrentUser)

module.exports = router
