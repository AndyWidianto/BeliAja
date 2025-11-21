const AppError = require("../untils/customError")
const models = require("../../models");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");


const createUser = async (user, { username, email, password, role }) => {
    if (user.role !== "super_admin") {
        throw new AppError("anda tidak dizinkan untuk membuat user", 403);
    }
    const findUser = await models.users.findOne({
        where: {
            email: email
        }
    });
    if (findUser) {
        throw new AppError("user telah tersedia", 409);
    }
    const passwordHash = await bcrypt.hash(password, 12);
    const newUser = await models.users.create({
        username, 
        email, 
        password: passwordHash,
        role
    });
    console.log(newUser);
    return newUser.toJSON();
}

const updateUser = async (user, { id, username, email, password }) => {
    if (user.role !== "super_admin") {
        throw new AppError("anda tidak diizinkan mengubah user", 403);
    }
    const findUser = await models.users.findByPk(id);
    if (!findUser) {
        throw new AppError("user tidak ditemukan", 404);
    }
    const updateUser = await findUser.update({
        username,
        email,
        password
    });
    return updateUser;
}

const deleteUser = async (user, id) => {
    if (user.role !== "super_admin") {
        throw new AppError("Anda tidak diizinkan untuk menghapus user", 403);
    }
    const deleteUser = await models.users.destroy({
        where: {
            id: id
        }
    });
    return deleteUser;
}
const deleteUsers = async (user, ids) => {
    if (user.role !== "super_admin") {
        throw new AppError("Anda tidak diizinkan untuk menghapus user", 403);
    }
    return await models.users.destroy({
        where: {
            id: {
                [Op.in]: ids
            }
        }
    });
}
const getUsers = async (user) => {
    if (user.role !== "admin" && user.role !== "super_admin") {
        throw new AppError("Anda tidak diizinkan mengambil data users", 403);
    }
    const users = await models.users.findAll();
    return users;
}


module.exports = { createUser, updateUser, deleteUser, deleteUsers, getUsers };