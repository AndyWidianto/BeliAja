const { createAccessToken, createRefreshToken } = require("../middleware/middleware");
const { register, login } = require("../services/authService");


const registerController = async (req, res, next) => {
    const { id, username, email, password, role } = req.body;

    try {
        const user = await register(id, username, email, password, role);
        const accessToken = createAccessToken(user);
        const refreshToken = createRefreshToken(user);
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: false, 
            maxAge: 1000 * 60 * 60 * 24
        })
        res.json({
            message: "berhasil register",
            token: accessToken
        });
    } catch (err) {
        next(err);
    }
}

const loginController = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const user = await login(email, password);
        const accessToken = createAccessToken(user);
        const refreshToken = createRefreshToken(user);
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: false, 
            maxAge: 1000 * 60 * 60 * 24
        })
        res.json({
            message: "berhasil login nih",
            token: accessToken
        });
    } catch (err) {
        next(err);
    }
}

module.exports = { registerController, loginController };