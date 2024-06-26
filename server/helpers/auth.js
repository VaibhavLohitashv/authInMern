const bcrypt = require('bcrypt');

// for Registration

const hashPassword = (password) => {
    return new Promise((res, rej) => {  //  resolve and reject
        bcrypt.genSalt(12, (err, salt) => {
            if (err) {
                rej(err)
            }
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) {
                    rej(err)
                }
                res(hash);
            })
        })
    })
}

// for Login

const comparePassword = (password, hashed) => {
    return bcrypt.compare(password, hashed)
}

module.exports = { hashPassword, comparePassword }