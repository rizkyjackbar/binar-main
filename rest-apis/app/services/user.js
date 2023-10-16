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

exports.login = async () => {
    
}

