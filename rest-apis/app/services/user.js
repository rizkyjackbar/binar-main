const authService = require('./auth')
const userRepository = require('./../repositories/user')
const ApplicationError = require('./../../config/errors/ApplicationError')

exports.create = async (payload) => {
    try{
        const {email, password, name, address, phoneNumber} = payload;

        if(!email || !password){
            throw new ApplicationError('Please input email and password', 500);
        }

        const encryptedPassword = await authService.encryptPassword(password);

        const user = await userRepository.create({
            email,
            encryptedPassword,
            name,
            address,
            phoneNumber
        });
        return user;
    } catch(err){
        throw new ApplicationError(`Failed to add new user ${err.message})`, 500);
    }
}

exports.checkUser = async (credentials) => {
    try {
        const {email, password} = credentials;
        
        if(!email || !password){
            throw new ApplicationError('Please input email or password', 500);
        }

        const user = await userRepository.findUserByEmail(email);

        if(!user){
            throw new ApplicationError('Email not found', 500);
        }

        const checkedPassword = await authService.checkPasssword(password, user.encryptPassword)  
        if(!checkedPassword){
            throw new ApplicationError('Password is wrong', 500);
        }
        return user;
    }catch(err){
        throw new ApplicationError(err.message, 500);
    }
}
