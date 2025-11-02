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

const authentication = async (req, res, next) => {
    const auth = req.headers.authorization;
    console.log(auth);
    if (!auth) {
        return res.status(401).json({
            message: "authorization"
        });
    }
    try {
        const token = auth.split(" ")[1];
        const verifyToken = jwt.verify(token, secret);
        req.user = verifyToken;
        next();
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

const verifyCookie = async (req, res, next) => {
    const { refreshToken } = req.cookies;
    console.log(refreshToken);
    if (!refreshToken) {
        return res.status(401).json({
            message: "Anda belum melakukan login"
        });
    }
    try {
        const payload = jwt.verify(refreshToken, secret);
        req.user = payload;
        req.refreshToken = refreshToken;
        next();
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "internal Server Error"
        })
    }
}

module.exports = { createAccessToken, createRefreshToken, authentication, verifyCookie };