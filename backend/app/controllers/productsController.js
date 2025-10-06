const { createProduct, updateProduct, deleteProduct, getProducts, getProduct } = require("../services/productsService");

const createProductController = async (req, res, next) => {
    const user = req.user;
    const { name, description, price, category_id, stock, image } = req.body;
    try {
        const product = await createProduct(user, { name, description, price, category_id, stock, image });
        return res.status(200).json({
            message: "Berhasil menambahkan produk",
            data: product
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}

const updateProductController = async (req, res, next) => {
    const { name, description, price, category_id, stock, image } = req.body;
    const user = req.user;
    const { id } = req.params;
    try {
        const product = await updateProduct(user, { id, name, description, price, category_id, stock, image });
        return res.status(200).json({
            message: "Berhasil update produk",
            data: product
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}

const deleteProductController = async (req, res, next) => {
    const user = req.user;
    const { id } = req.params;
    try {
        await deleteProduct(user, id);
        return res.status(200).json({
            message: "produk berhasil di hapus"
        })
    } catch (err) {
        console.error(err);
        next(err);
    }
}

const getProductsController = async (req, res, next) => {
    try {
        const products = await getProducts();
        return res.status(200).json({
            data: products
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}

const getProductController = async (req, res, next) => {
    const { id } = req.params;
    try {
        const product = await getProduct(id);
        return res.status(200).json({
            data: product
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}

module.exports = {
    createProductController,
    updateProductController, 
    deleteProductController,
    getProductController,
    getProductsController
}