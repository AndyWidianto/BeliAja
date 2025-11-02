const { createCartItem, deleteCartItem } = require("../services/cartItemsService");

const CreateCartItemController = async (req, res, next) => {
    const { cart_id, product_id, quantity, price, subtotal, variant_id } = req.body;
    try {
        const cartItem = await createCartItem({ cart_id, product_id, quantity, price, subtotal, variant_id });
        return res.json({
            message: "Cart Item berhasil ditambahkan",
            data: cartItem
        })
    } catch (err) {
        console.error(err);
        next(err);
    }
}

const deleteCartItemController = async (req, res, next) => {
    const { id } = req.params;
    const user = req.user;
    try {
        await deleteCartItem(user, id);
        return res.json({
            message: "Berhasil menghapus cart item"
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}

module.exports = { CreateCartItemController, deleteCartItemController };