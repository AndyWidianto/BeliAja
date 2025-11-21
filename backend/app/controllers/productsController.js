const { createProduct, updateProduct, deleteProduct, getProducts, getProduct, deleteProducts } = require("../services/productsService");

const createProductController = async (req, res, next) => {
    const user = req.user;
    const { name, description, category_id } = req.body;
    const file = req.file;
    console.log(file);
    try {
        const product = await createProduct(user, { name, description, category_id, file: file });
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
    const { name, description, category_id } = req.body;
    const user = req.user;
    const file = req.file;
    const { id } = req.params;
    try {
        const product = await updateProduct(user, { id, name, description, category_id, image: file });
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
            data: products,
            message: "Berhasil mengambil products"
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
            data: product,
            message: "Berhasil mengambil product"
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}
const deleteProductsController = async (req, res, next) => {
    const { ids } = req.body;
    const user = req.user;
    try {
        await deleteProducts(user, ids);
        return res.status(200).json({
            message: "Berhasil menghapusnya"
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
    getProductsController,
    deleteProductsController
}