const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { Auth, User } = require("../models")
const ApiError = require("../utils/apiError")

const register = async (req, res, next) => {
  try {
    const { name, email, password, confirmPassword, age, address } =
      req.body
      let newUser

    const user = await Auth.findOne({
      where: {
        email,
      },
    })

    if (user) {
      next(new ApiError("Email has already taken!", 400))
    }

    const passwordLength = password <= 6
    if (passwordLength) {
      next(
        new ApiError(
          "The password must be at least 6 characters!",
          400
        )
      )
    }

    if (password !== confirmPassword) {
      next(new ApiError("Password doesn't match!", 400))
    }

    const saltRounds = 10
    const hashedPassword = bcrypt.hashSync(password, saltRounds)
    const hashedConfirmPassword = bcrypt.hashSync(
      confirmPassword,
      saltRounds
    )

    if (req.user) {
      if (req.user.role == "Superadmin") {
        newUser = await User.create({
          name,
          age,
          address,
          role: "Admin",
        })
      } else {
        newUser = await User.create({
          name,
          age,
          address,
        })
      }
    }

    await Auth.create({
      email,
      password: hashedPassword,
      confirmPassword: hashedConfirmPassword,
      userId: newUser.id,
    })

    res.status(201).json({
      status: "Success",
      data: {
        ...newUser,
        email,
        password: hashedPassword,
        confirmPassword: hashedConfirmPassword,
      },
    })
  } catch (err) {
    next(new ApiError(err.message, 500))
  }
}

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body

    const user = await Auth.findOne({
      where: {
        email,
      },
      include: ["User"],
    })

    if (!user) {
      return next(new ApiError("User not found!", 404))
    }

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign(
        {
          id: user.userId,
          username: user.User.name,
          role: user.User.role,
          email: user.email,
        },
        process.env.JWT_SECRET
      )

      res.status(200).json({
        status: "Success",
        message: "Login success!",
        data: token,
      })
    } else {
      return next(
        new ApiError("Wrong password or user doesn't exist!", 400)
      )
    }
  } catch (err) {
    next(new ApiError(err.message, 500))
  }
}

const checkCurrentUser = async (req, res, next) => {
  try {
    res.status(200).json({
      status: "Success",
      data: {
        user: req.user,
      },
    })
  } catch (err) {
    next(new ApiError(err.message, 500))
  }
}

module.exports = {
  register,
  login,
  checkCurrentUser,
}
