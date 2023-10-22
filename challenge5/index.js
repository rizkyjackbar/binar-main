const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")

const ApiError = require("./utils/apiError")
const errorHandler = require("./controllers/errorController")
const router = require("./routes")

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(morgan("dev"))
app.use(cors())
app.use(router)
app.use(express.static(`${__dirname}/public`))

app.all("*", (req, res, next) => {
  const err = new Error("Route not exist!")
  err.status = "failed"
  err.statusCode = 404

  next(new ApiError(`Route not exist!`, 404))
})

app.use(errorHandler)

module.exports = app
