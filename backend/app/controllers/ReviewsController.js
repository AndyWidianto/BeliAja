const { createReview, updateReview, getReviews } = require("../services/reviewsService");

const getReviewsController = async (req, res, next) => {
    const { id } = req.params;
    try {
        const reviews = await getReviews(id);
        return res.json({
            message: "berhasil mengambil Review",
            data: reviews
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}

const createReviewController = async (req, res, next) => {
    const { user_id, product_id, ranting, name_variant, comment } = req.body;
    try {
        const review = await createReview({ user_id, product_id, ranting, name_variant, comment });
        return res.json({
            message: "Berhasil membuat review",
            data: review
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}

const updateReviewController = async (req, res, next) => {
    const { user_id, product_id, ranting, name_variant, comment } = req.body;
    const { id } = req.params;
    try {
        const review =  await updateReview(id, { user_id, product_id, ranting, name_variant, comment });
        res.json({
            message: "Berhasil update review",
            data: review
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}

module.exports = { createReviewController, updateReviewController, getReviewsController };


