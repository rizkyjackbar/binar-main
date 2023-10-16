const {User} = require('./../models')

exports.create =(payload) => {
    return User.create(payload)
};

exports.login = () => {
    return User.findAll(payload)
}
