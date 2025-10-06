const { createCategory, updateCategory, deleteCategory, getCategories } = require("../services/categoriesService");

const createCategoryController = async (req, res, next) => {
    const { name, description } = req.body;
    const user = req.user;

    try {
        const newCategory = await createCategory(user, { name, description });
        return res.status(200).json({
            message: "berhasil membuat categori",
            data: newCategory
        });
    } catch (err) {
        next(err);
    }
}

const updateCategoryController = async (req, res, next) => {
    const user = req.user;
    const { name, description } = req.body;
    const { id } = req.params;
    try {
        const newCategory = await updateCategory(user, { id, name, description });
        return res.status(200).json({
            message: "berhasil update categori",
            data: newCategory
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}

const deleteCategoryController = async (req, res, next) => {
    const user = req.user;
    const { id } = req.params;
    try {
        await deleteCategory(user, id);
        return res.status(200).json({
            message: "berhasil menghapus categori"
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}

const getCategoriesController = async (req, res, next) => {
    try {
        const categories = await getCategories();
        return res.status(200).json({
            message: "Berhasil mengambil categories",
            data: categories
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}

module.exports = { createCategoryController, updateCategoryController, deleteCategoryController, getCategoriesController };