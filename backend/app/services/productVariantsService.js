const { Op } = require("sequelize");
const { product_variants, products, categories } = require("../../models");
const AppError = require("../untils/customError");
const path = require("path");
const fs = require("fs");

const generateSku = (name, id) => {
    const prefix = name.substring(0, 3).toUpperCase();
    return `${prefix}-${id}`;
}
const getVariantProduct = async ({ limit, offset, search }) => {
    const searchVariant = search ? search : "";
    const variantsProduct = await product_variants.findAll({
        where: {
            variant_name: {
                [Op.like]: `%${searchVariant}%`
            }
        },
        include: [
            {
                model: products,
                as: "product",
                include: {
                    model: categories,
                    as: "category"
                }
            }
        ],
        order: [["createdAt", "DESC"]],
        offset: offset,
        limit: limit
    });
    return variantsProduct;
}
const createVariantProduct = async (user, { product_id, image, variant_name, price, stock }) => {
    if (user.role !== "admin" && user.role !== "super_admin") {
        throw new AppError("Anda tidak diizinkan untuk merubahnya", 403);
    }
    const findProduct = await products.findByPk(product_id, {
        include: [
            {
                model: categories,
                as: "category"
            }
        ]
    });
    if (!findProduct) {
        throw new AppError("Product tidak tersedia", 404);
    }
    let imageUrl = null;
    if (image) {
        imageUrl = `/images/${image.filename}`;
    }
    const variantProduct = await product_variants.create({
        product_id,
        image: imageUrl,
        variant_name,
        price,
        stock
    });
    const sku = generateSku(variant_name, variantProduct.id);
    await variantProduct.update({ sku });
    const variantProductJson = variantProduct.toJSON();
    variantProductJson.product = findProduct;
    return variantProductJson;
}
const updateVariantProduct = async (user, { id, product_id, image, variant_name, price, stock }) => {
    if (user.role !== "admin" && user.role !== "super_admin") {
        throw new AppError("Anda tidak diizinkan untuk merubahnya", 403);
    }
    const findVariantProduct = await product_variants.findByPk(id, {
        include: [
            {
                model: products,
                as: "product"
            }
        ]
    });
    if (!findVariantProduct) {
        throw new AppError("Variant Product tidak tersedia", 404);
    }
    const findProduct = await products.findByPk(product_id);
    if (!findProduct) {
        throw new AppError("Product tidak tersedia", 404);
    }
    let imageUrl = findVariantProduct.image;
    if (image) {
        imageUrl = `/images/${image.filename}`;
    }
    const oldImage = path.join(__dirname, "..", "..", "public", "uploads", findVariantProduct.image);
    if (fs.existsSync(oldImage)) {
        fs.unlinkSync(oldImage);
        console.log("logo lama dihapus");
    }
    const sku = generateSku(findProduct.variant_name, id);
    await findVariantProduct.update({
        product_id,
        variant_name,
        image: imageUrl,
        sku,
        price,
        stock
    });
    const variantProductJson = findVariantProduct.toJSON();
    variantProductJson.product = findProduct;
    return variantProductJson;
}
const deleteVariantProduct = async (user, id) => {
    if (user.role !== "admin" && user.role !== "super_admin") {
        throw new AppError("Anda tidak diizinkan untuk merubahnya", 403);
    }
    return await product_variants.destroy({
        where: {
            id: id
        }
    });
}

const deleteVariantsProduct = async (user, ids) => {
    if (user.role !== "admin" && user.role !== "super_admin") {
        throw new AppError("Anda tidak diizinkan untuk merubahnya", 403);
    }
    return await product_variants.destroy({
        where: {
            id: {
                [Op.in]: ids
            }
        }
    });
}

module.exports = {
    getVariantProduct,
    createVariantProduct,
    updateVariantProduct,
    deleteVariantProduct,
    deleteVariantsProduct
};