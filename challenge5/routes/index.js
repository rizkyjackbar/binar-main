const router = require("express").Router()

const swaggerUI = require("swagger-ui-express")
const swaggerDocument = require("../docs/swagger.json")

router.use("/api-docs", swaggerUI.serve)
router.use("/api-docs", swaggerUI.setup(swaggerDocument))

const carRouter = require("./carRouter")
const userRouter = require("./userRouter")
const authRouter = require("./authRouter")

router.use("/cars", carRouter)
router.use("/user", userRouter)
router.use("/auth", authRouter)

module.exports = router
