const { carts } = require("../../models");
const AppError = require("../untils/customError");


const createCart = async (user) => {
    const cart = await carts.create({
        user_id: user.id
    });
    return cart;
}

const getCart = async (id) => {
    const cart = await carts.findByPk(id, {
        include: {
            model: "cart_items",
            as: "items"
        }
    });
    if (!cart) {
        throw new AppError("cart tidak tersedia", 404);
    }
    return cart;
}

const deleteCart = async (user, id) => {
    return await carts.destroy({
        where: {
            user_id: user.id,
            id: id
        }
    });
}

module.exports = { createCart, getCart, deleteCart };