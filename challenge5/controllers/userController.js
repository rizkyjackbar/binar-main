const { User } = require("../models")
const ApiError = require("../utils/apiError")

const findUsers = async (req, res, next) => {
  try {
    const Users = await User.findAll()

    res.status(200).json({
      status: "Success",
      data: {
        Users,
      },
    })
  } catch (err) {
    next(new ApiError(err.message, 400))
  }
}

const findUserById = async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
    })

    res.status(200).json({
      status: "Success",
      data: {
        user,
      },
    })
  } catch (err) {
    next(new ApiError(err.message, 400))
  }
}

const updateUser = async (req, res, next) => {
  const { name, age, address } = req.body
  try {
    const updatedUser = await User.update(
      {
        name,
        age,
        address,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )

    res.status(200).json({
      status: "Success",
      data: {
        updatedUser,
      },
    })
  } catch (err) {
    next(new ApiError(err.message, 400))
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
    })

    if (!user) {
      next(new ApiError("Id user tidak ditemukan!", 404))
    }

    await User.destroy({
      where: {
        id: req.params.id,
      },
    })

    res.status(200).json({
      status: "Success",
      message: "Data berhasil di hapus!",
    })
  } catch (err) {
    next(new ApiError(err.message, 400))
  }
}

module.exports = {
  findUsers,
  findUserById,
  updateUser,
  deleteUser,
}
