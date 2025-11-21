const { Op } = require("sequelize");
const db = require("../../models");
const bcrypt = require("bcrypt");
const AppError = require("../untils/customError");
const { createAccessToken, createRefreshToken } = require("../middleware/middleware");

const register = async (id, username, email, password) => {
    const newPassword = await bcrypt.hash(password, 12);
    const user = await db.users.findOne({
        where: {
            email: email
        }
    });
    if (user) {
        throw new AppError("Email telah tersedia", 409);
    }
    const role = "user";
    const result = await db.users.create({
        id,
        username,
        email,
        password: newPassword,
        role
    });
    const accessToken = createAccessToken(result);
    const refreshToken = createRefreshToken(result);
    await result.update({
        refreshToken
    });
    return { accessToken, refreshToken };
}

const login = async (email, password) => {
    const user = await db.users.findOne({
        where: {
            [Op.or]: [
                { username: email },
                { email: email }
            ]
        }
    });
    if (!user) {
        throw new AppError("User tidak ditemukan", 404);
    }
    const userJson = user.toJSON();
    const match = await bcrypt.compare(password, userJson.password);
    if (!match) {
        throw new AppError("Password salah", 401);
    }
    const accessToken = createAccessToken(userJson);
    const refreshToken = createRefreshToken(userJson);
    await user.update({
        refreshToken
    });
    return { accessToken, refreshToken };
}

const refreshToken = async (user, token) => {
    const findUser = await db.users.findByPk(user.id);
    if (!findUser) {
        new AppError("user tidak ada", 404);
    }
    if (token !== findUser.refreshToken) {
        new AppError("Anda tidak diizinkan untuk merubah membuat token baru", 403);
    }
    const newAccessToken = createAccessToken(findUser.toJSON());
    return newAccessToken;
}


module.exports = { login, register, refreshToken };