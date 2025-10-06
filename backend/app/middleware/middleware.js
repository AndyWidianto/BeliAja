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

const authentication = async (req, resizeBy, next) => {
    const auth = req.headers.authorization;
    if (!auth) {
        return resizeBy.status(401).json({
            message: "authorization"
        });
    }
    try {
        const token = auth.split(" ")[1];
        const verifyToken = jwt.verify(token, secret);
        req.user = verifyToken;
        next();
    } catch (err) {
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

module.exports = { createAccessToken, createRefreshToken, authentication };