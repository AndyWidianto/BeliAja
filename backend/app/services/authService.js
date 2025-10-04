const { Op } = require("sequelize");
const db = require("../../models");
const bcrypt = require("bcrypt");
const AppError = require("../untils/customError");

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
    return result;
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
    return userJson;
}

const getUsers = async () => {
    const users = await db.users.findAll();
    return users;
}


module.exports = { login, register, getUsers };