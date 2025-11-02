const { createCart, getCart, deleteCart } = require("../services/cartsService");

const createCartController = async (req, res, next) => {
    const user = req.user;
    try {
        const cart = await createCart(user);
        return res.json({
            message: "cart berhasil dibuat",
            data: cart
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}

const getCartController = async (req, res, next) => {
    const { id } = req.params;
    try {
        const cart = await getCart(id);
        return res.json({
            message: "Ini cartnya",
            data: cart
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}

const deleteCartController = async (req, res, next) => {
    const { id } = req.params;
    const user = req.user;
    try {
        await deleteCart(user, id);
        return res.json({
            message: "Berhasil delete cart", 
        })
    } catch (err) {
        console.error(err);
        next(err);
    }
}

module.exports = { createCartController, getCartController, deleteCartController };