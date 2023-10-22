const router = require("express").Router()

const carRouter = require("./carRouter")
const userRouter = require("./userRouter")
const authRouter = require("./authRouter")

router.use("/cars", carRouter)
router.use("/user", userRouter)
router.use("/auth", authRouter)

module.exports = router