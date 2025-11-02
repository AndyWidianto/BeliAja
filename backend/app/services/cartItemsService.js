const { cart_items, carts, products } = require("../../models");
const AppError = require("../untils/customError");

const createCartItem = async ({ cart_id, product_id, quantity, price, subtotal, variant_id }) => {
    const cart = await carts.findByPk(cart_id);
    if (!cart) {
        throw new AppError("cart tidak tersedia", 404);
    }
    const product = await products.findByPk(product_id);
    if (!product) {
        throw new AppError("product tidak tersedia", 404);
    }
    const cartItem = await cart_items.create({
        cart_id,
        product_id,
        subtotal,
        price,
        quantity,
        variant_id
    });
    return {
        product: product,
        cart_item: cartItem
    }
}

const deleteCartItem = async (user, id) => {
    const cart = await carts.findOne({
        where: {
            user_id: user.id,
            include: {
                model: cart_items,
                as: "items",
                where: {
                    id: id
                }
            }
        }
    });
    if (!cart) {
        throw new AppError("Cart tidak tersedia", 404);
    }
    return await cart_items.destroy({
        where: {
            id: id
        }
    })
}

module.exports = { createCartItem, deleteCartItem };