const { register, login, refreshToken } = require("../services/authService");


const registerController = async (req, res, next) => {
    const { id, username, email, password, role } = req.body;

    try {
        const user = await register(id, username, email, password, role);
        res.cookie("refreshToken", user.refreshToken, {
            httpOnly: true,
            secure: false, 
            maxAge: 1000 * 60 * 60 * 24
        })
        res.json({
            message: "berhasil register",
            token: user.accessToken
        });
    } catch (err) {
        next(err);
    }
}

const loginController = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        const user = await login(username, password);
        res.cookie("refreshToken", user.refreshToken, {
            httpOnly: true,
            secure: false, 
            maxAge: 1000 * 60 * 60 * 24
        })
        res.json({
            message: "berhasil login nih",
            token: user.accessToken
        });
    } catch (err) {
        next(err);
    }
}

const refreshTokenController = async (req, res, next) => {
    const user = req.user;
    const token = req.refreshToken;
    try {
        const newToken = await refreshToken(user, token);
        res.json({
            message: "Berhasil update token",
            token: newToken
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}

module.exports = { registerController, loginController, refreshTokenController };