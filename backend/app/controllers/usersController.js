const { getUsers } = require("../services/authService")


const getUsersController = async (req, res, next) => {
    try {
        const users = await getUsers();
        res.json(users);
    } catch (err) {
        console.error(err);
        next(err);
    }
}

module.exports = { getUsersController };