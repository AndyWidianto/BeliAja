const jwt = require("jsonwebtoken");
require("dotenv").config();


const secret = process.env.SECRET_JWT;

const createAccessToken = (data) => {
    delete data.password;
    console.log(data);
    return jwt.sign(data, secret, {
        expiresIn: "15m"
    });
}

const createRefreshToken = (data) => {
    delete data.password;
    return jwt.sign(data, secret, {
        expiresIn: "30d"
    });
}

module.exports = { createAccessToken, createRefreshToken };