const AppError = require("../untils/customError");
const { products } = require("../../models");

const generateSku = (name, id) => {
    const prefix = name.substring(0, 3).toUpperCase();
    return `${prefix}-${id}`;
}
const createProduct = async (user, { name, description, price, category_id, stock, image }) => {
    if (user.role !== "admin" || user.role !== "super_admin") {
        throw new AppError("Anda tidak diizinkan untuk membuat produk", 403);
    }

    const product = await products.create({
        name,
        description, 
        price, 
        category_id,
        stock,
        image
    });
    const sku = generateSku(product.name, product.id);
    await product.update({ sku });
    return product;
}

const updateProduct = async (user, { id, name, description, price, stock, category_id, image }) => {
    if (user.role !== "admin" || user.role !== "super_admin") {
        throw new AppError("Anda tidak diizinkan untuk mengupdate product", 403);
    }
    const product = await products.findByPk(id);
    if (!product) {
        throw new AppError("Product tidak tersedia", 404);
    }
    const sku = generateSku(product.name, product.id);
    await product.update({
        name, 
        description, 
        price, 
        stock, 
        category_id,
        image, 
        sku
    });

    return product;
}

const deleteProduct = async (user, id) => {
    if (user.role !== 'admin' || user.role !== "super_admin") {
        throw new AppError("Anda tidak diizinkan untuk menghapus produk", 403);
    }
    return await products.destroy({
        where: {
            id: id
        }
    });
}

const getProducts = async () => {
    const Products = await products.findAll();
    return Products;
}

const getProduct = async (id) => {
    const product = await products.findByPk(id);
    return product;
}

module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getProducts,
    getProduct
}
