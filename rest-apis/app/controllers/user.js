const authService = require('./../services/auth')
const userService = require('./../services/user')

let users = []; 

exports.register = async (req, res) => {
    
    try{
        const body = req.body;
        const data = await userService.create(body);
        res.json({
            status: "OK",
            message: "Successfully created",
            data
        }) 
    } catch(err){
        res.status(err.statusCode).json({
            status: "FAIL",
            message: err.message,
        })
    }
}

exports.login = async (req, res) => {
    try{
        const {email, password} = req.body;
        if(!email || !password){
            res.status(500).json({
                status: 'FAIL',
                message: 'Please input email or password'
            });
            return;
        }

        const user = users.find((item)=> item.email === email);
        if(!user){
            res.status(404).json({
                status: 'FAIL',
                message: 'Email not found'
            });
            return;
        }

        const checkedPassword = await authService.checkPasssword(password, user.password)
        if(!checkedPassword){
            res.status(500).json({
                status: 'FAIL',
                message: 'Password is wrong'
            });
            return;
        }

        res.json({
            status: 'OK',
            message: 'Succesful',
            data: user
        })
    } catch (err){
        res.status(500).json({
            status: 'FAIL',
            message: err.message,
        })
    }
}
