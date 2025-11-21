const { createUser, updateUser, deleteUser, getUsers, deleteUsers } = require("../services/usersService");


const getUsersController = async (req, res, next) => {
    const user = req.user;
    try {
        const users = await getUsers(user);
        res.json({
            data: users,
            message: ""
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}

const createUserController = async (req, res, next) => {
    const user = req.user;
    const { username, email, password, role } = req.body;
    try {
        const newUser = await createUser(user, { username, email, password, role });
        return res.status(200).json({
            message: "Berhasil menambahkan user",
            data: newUser
        });
    } catch (err) {
        next(err);
    }
}

const updateUserController = async (req, res, next) => {
    const user = req.user;
    const { id } = req.params;
    const { username, email, password } = req.body;
    try {
        const newUser = await updateUser(user, { id, username, email, password });
        return res.status(200).json({
            message: "update berhasil",
            data: newUser
        });
    } catch (err) {
        next(err);
    }
}

const deleteUserController = async (req, res, next) => {
    const { id } = req.params;
    const user = req.user;
    try {
        await deleteUser(user, id);
        return res.status(200).json({
            message: "Berhasi menghapus user"
        });
    } catch (err) {
        next(err);
    }
}
const deleteUsersController = async (req, res, next) => {
    const { ids } = req.body;
    const user = req.user;
    try {
        await deleteUsers(user, ids);
        return res.json({
            message: "User berhasil di hapus"
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}

module.exports = { getUsersController, createUserController, updateUserController, deleteUserController, deleteUsersController };