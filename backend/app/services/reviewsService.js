const { reviews } = require("../../models");
const AppError = require("../untils/customError");

const createReview = async ({ user_id, product_id, ranting, name_variant, comment }) => {
    const review = await reviews.create({
        user_id,
        product_id,
        ranting,
        name_variant,
        comment
    });
    return review;
}

const updateReview = async (id, {user_id, product_id, ranting, name_variant, comment}) => {
    const findReview = await reviews.findByPk(id);
    if (!findReview) {
        throw new AppError("Review tidak tersedia", 404);
    }
    await findReview.update({
        user_id,
        product_id,
        ranting,
        name_variant,
        comment
    });
    return findReview;
}

const getReviews = async (id) => {
    const findProduct = await products.findByPk(id);
    if (!findProduct) {
        throw new AppError("Product tidak tersedia", 404);
    }
    const allReviews = await reviews.findAll({
        where: {
            product_id: id
        }
    });
    return allReviews;
}

module.exports = { createReview, updateReview, getReviews };