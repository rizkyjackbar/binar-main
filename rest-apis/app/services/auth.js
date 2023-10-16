const bcrypt = require('bcryptjs');
const SALT = 10;

const encryptPassword = async (password) => {
    try{
        const hash = await bcrypt.hash(password, SALT);
        return hash;
    } catch(err){
        throw new Error(err)
    }
}

// console.log(encryptPassword('Ika').then((data)=>{console.log(data)}));

const checkPasssword = async (password, hash) => {
    try{
        const result = await bcrypt.compare(password, hash);
        return result;
    } catch(err){
        throw new Error(err)
    }
}

module.exports = {
    encryptPassword,
    checkPasssword
}

// const password = 'Ika'
// const hash = '$2a$10$WdFrjxKFN/81Rm98JVy.a.7QnOvDcXDKxaejRZc74LCMhfHs0uVV6'
// const hash2 = '$2a$10$KW4GJTSSqZb6hiTYyKGGCeOxGYglTkHt1oK1vltTtOlGnE2yILspG'
// // encryptPassword(password).then((data=>{console.log(data)}))
// checkPasssword(password, hash2).then((data)=>{console.log(data)});

