const users = require("../../models/users");
const AppError = require("../untils/customError");
const models = require("../../models");

const createCategory = async (user, { name, description }) => {
    if (user.role !== "admin" || user.role !== "super_admin") {
        throw new AppError("Anda tidak diizinkan untuk membuat categori", 403);
    }

    const newCategory = await models.categories.create({
        name,
        description
    });
    return newCategory;
}

const updateCategory = async (user, { id, name, description }) => {
    if (user.role !== "admin" || user.role !== "super_admin") {
        throw new AppError("Anda tidak diizinkan untuk membuat categori", 403);
    }
    const findCategory = await models.categories.findByFk(id);
    if (!findCategory) {
        throw new AppError("categori tidak ditemukan", 404);
    }
    const update = await findCategory.update({
        name, 
        description
    });
    return update;
}
const deleteCategory = async (user, id) => {
    if (user.role !== "admin" || user.role !== "super_admin") {
        throw new AppError("Anda tidak diizinkan untuk membuat categori", 403);
    }
    return await models.categories.destroy(id);
}
const getCategories = async () => {
    const categories = await models.categories.findAll();
    return categories;
}

module.exports = { createCategory, updateCategory, deleteCategory, getCategories };