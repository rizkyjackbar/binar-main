exports.authorize = (req, res, next) => {
    exports.authorize = async (req, res, next) => {
        try {
            const bearerToken = req.headers.authorization;
            const user = await authService.authorize(bearerToken);
            req.user = user;
            next();
        } catch (err) {
            res.status(err.statusCode || 500).json({
                status: "FAIL",
                message: err.message,
            })
        }
    }
}