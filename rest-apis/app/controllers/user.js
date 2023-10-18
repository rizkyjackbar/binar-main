const authService = require('./../services/auth')
const userService = require('./../services/user')

let users = [];

exports.register = async (req, res) => {
    try {
        const body = req.body;

        const data = await userService.create(body)

        res.json({
            status: "OK",
            message: "Success",
            data
        });
    } catch (err) {
        res.status(err.statusCode).json({
            status: "FAIL",
            message: err.message,
        })
    }
}

exports.login = async (req, res) => {
    try {
        const credentials = req.body;

        const user = await userService.checkUser(credentials)
        res.json({
            status: 'OK',
            message: 'Succesful',
            data: user
        })

    } catch (err) {
        res.status(err.statusCode).json({
            status: "FAIL",
            message: `Login failed: ${err.message}`,
        })
    }
}

