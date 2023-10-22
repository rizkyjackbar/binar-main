const { Car } = require("../models")
const imagekit = require("imagekit")
const ApiError = require("../utils/apiError")

const createCar = async (req, res, next) => {
  try {
    const { name, price, category, isAvailable } = req.body

    const file = req.file
    let img

    if (file) {
      const split = file.originalname.split(".")
      const extension = split[split.length - 1]

      const uploadedImage = await imagekit.upload({
        file: file.buffer,
        fileName: `IMG-${Date.now()}.${extension}`,
      })
      img = uploadedImage.url
    }

    const newCar = await Car.create({
      name,
      price,
      category,
      isAvailable,
      imageUrl: img,
      createdBy: req.user.id,
      updatedBy: req.user.id,
    })

    const createdBy = await User.findByPk(req.user.id)

    res.status(200).json({
      status: "Success",
      message: "Data added successfully!",
      data: {
        ...newCar.toJSON(),
        createBy: createdBy.User.name,
      },
    })
  } catch (err) {
    next(new ApiError(err.message, 400))
  }
}

const findAllCars = async (req, res, next) => {
  try {
    const { isAvailable } = req.query
    const condition = {}

    if (isAvailable) {
      if (
        isAvailable === "Available" ||
        isAvailable === "Not Available"
      ) {
        condition.isAvailable = isAvailable
      }
    }

    const cars = await Car.findAll({
      where: condition,
      paranoid: false,
      include: ["Created by", "Update by", "Delete by"],
    })

    res.status(200).json({
      status: "Success",
      data: {
        cars,
      },
    })
  } catch (err) {
    next(new ApiError(err.message, 400))
  }
}

const findCarById = async (req, res, next) => {
  try {
    const car = await Car.findOne({
      where: {
        id: req.params.id,
      },
      include: ["User"],
    })

    if (car === null) {
      return next(new ApiError("Car not found!", 404))
    }

    res.status(200).json({
      status: "Success",
      message: "Data found!",
      data: {
        car,
      },
    })
  } catch (err) {
    next(new ApiError(err.message, 400))
  }
}

const deleteCar = async (req, res, next) => {
  try {
    const deleteCar = Car.findOne({
      where: {
        id: req.params.id,
      },
    })

    if (!deleteCar) {
      return next(new ApiError("Car not found!", 404))
    }

    await Car.update(
      {
        deletedBy: req.user.id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )

    await Car.destroy({
      where: {
        id: req.params.id,
      },
    })

    res.status(200).json({
      status: "Success",
      message: "Car data has been deleted!",
    })
  } catch (err) {
    next(new ApiError(err.message, 400))
  }
}

const updateCar = async (req, res, next) => {
  try {
    const { name, price, category, isAvailable } = req.body

    const file = req.file
    let img
    if (file) {
      const split = file.originalname.split(".")
      const extension = split[split.length - 1]

      const uploadedImage = await imagekit.upload({
        file: file.buffer,
        fileName: `IMG-${Date.now()}.${extension}`,
      })
      img = uploadedImage.url
    }

    const updatedCar = await Car.update(
      {
        name,
        price,
        category,
        isAvailable,
        imageUrl: img,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )

    const updateBy = await User.findByPk(req.user.id)

    res.status(200).json({
      status: "Success",
      message: "Car data updated successfully!",
      data: {
        ...updatedCar.toJSON(),
        updateBy: updateBy.User.name,
      },
    })
  } catch (err) {
    next(new ApiError(err.message, 400))
  }
}

module.exports = {
  createCar,
  findAllCars,
  findCarById,
  deleteCar,
  updateCar,
}
