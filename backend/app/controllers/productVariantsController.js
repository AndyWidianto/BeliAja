const { getVariantProduct, createVariantProduct, updateVariantProduct, deleteVariantProduct, deleteVariantsProduct } = require("../services/productVariantsService");

const getVariantsProductController = async (req, res, next) => {
    const { limit, offset } = req.query;
    const search = req.query.search || null;
    try {
        const variantsProduct = await getVariantProduct({ limit: parseInt(limit), offset: parseInt(offset), search });
        return res.json({
            data: variantsProduct,
            message: "Berhasil mengambil data"
        })
    } catch (err) {
        console.error(err);
        next(err);
    }
}

const createVariantProductController = async (req, res, next) => {
    const { product_id, variant_name, price, stock } = req.body;
    const image = req.file;
    const user = req.user;
    try {
        const variantProduct = await createVariantProduct(user, { product_id, variant_name, image, price, stock });
        return res.json({
            data: variantProduct,
            message: "Berhasil menambahkan variant product"
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}
const updateVariantProductController = async (req, res, next) => {
    const { product_id, variant_name, sku, price, stock } = req.body;
    const user = req.user;
    const { id } = req.params;
    const image = req.file;
    try {
        const variantProduct = await updateVariantProduct(user, { id, product_id, image, variant_name, sku, price, stock });
        return res.json({
            data: variantProduct,
            message: "Berhasil update variant product"
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}
const deleteVariantProductController = async (req, res, next) => {
    const { id } = req.params;
    const user = req.user;
    try {
        await deleteVariantProduct(user, id);
        return res.json({
            message: "Berhasil menghapus variant product"
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}
const deleteVariantsProductController = async (req, res, next) => {
    const { ids } = req.body;
    const user = req.user;
    try {
        await deleteVariantsProduct(user, ids);
        return res.json({
            message: "Berhasil menghapus variant product"
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}

module.exports = {
    getVariantsProductController,
    createVariantProductController,
    updateVariantProductController,
    deleteVariantProductController,
    deleteVariantsProductController
};