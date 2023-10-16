const jwt = require("jsonwebtoken");
const { User, Auth } = require("../models");
const ApiError = require("../utils/apiError");

module.exports = async (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization;

    if (!bearerToken) {
      next(new ApiError("token nya gak ada", 401));
    }

    const token = bearerToken.split("Bearer ")[1];

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(payload.id, {
      include: ["Auth"],
    });

    req.user = user;
    next();
  } catch (err) {
    next(new ApiError(err.message, 500));
  }
};
