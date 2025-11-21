const AppError = require("../untils/customError");
const { products, categories } = require("../../models");
const { Op } = require("sequelize");

const createProduct = async (user, { name, description, category_id, file }) => {
    if (user.role !== "admin" && user.role !== "super_admin") {
        throw new AppError("Anda tidak diizinkan untuk membuat produk", 403);
    }
    const findCategory = await categories.findByPk(category_id);
    if (!findCategory) {
        throw new AppError("Category tidak tersedia", 404);
    }
    let imageUrl = null;
    if (file) {
        imageUrl = `/images/${imageUrl.filename}`;
    }
    const product = await products.create({
        name,
        description,
        category_id, 
        image: imageUrl
    });

    return product;
}

const updateProduct = async (user, { id, name, description, category_id, image }) => {
    if (user.role !== "admin" && user.role !== "super_admin") {
        throw new AppError("Anda tidak diizinkan untuk mengupdate product", 403);
    }
    const product = await products.findByPk(id);
    if (!product) {
        throw new AppError("Product tidak tersedia", 404);
    }
    await product.update({
        name,
        description,
        category_id,
        image
    });

    return product;
}

const deleteProduct = async (user, id) => {
    if (user.role !== 'admin' && user.role !== "super_admin") {
        throw new AppError("Anda tidak diizinkan untuk menghapus produk", 403);
    }
    return await products.destroy({
        where: {
            id: id
        }
    });
}

const getProducts = async () => {
    const Products = await products.findAll({
        include: {
            model: categories,
            as: "category"
        }
    });
    return Products;
}

const getProduct = async (id) => {
    const product = await products.findByPk(id, {
        include: {
            model: "categories",
            as: "category"
        }
    });
    return product;
}
const deleteProducts = async (user, ids) => {
    if (user.role !== "admin" && user.role !== "super_admin") {
            }
    return await products.destroy({
        where: {
            id: {
                [Op.in]: ids
            }
        }
    });
}

module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getProducts,
    getProduct,
    deleteProducts
}
