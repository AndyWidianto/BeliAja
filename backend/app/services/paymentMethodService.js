const { Op } = require("sequelize");
const { payment_methods } = require("../../models");
const AppError = require("../untils/customError");
const path = require("path");
const fs = require("fs");

const createPaymentMethod = async (user, { name, type, provider, description, file, is_active }) => {
    if (user.role != "admin" && user.role != "super_admin") {
        throw new AppError("Anda tidak diizinkan untuk membuat payment", 403);
    }
    let imageUrl = null;
    console.log(file);
    if (file) {
        imageUrl = `images/${file.filename}`;
    }
    const paymentMethod = await payment_methods.create({
        name, 
        type,
        provider,
        description,
        logo_url: imageUrl,
        is_active
    });
    return paymentMethod;
}

const updatePaymentMethod = async (user, { id, name, type, provider, description, file, is_active }) => {
    if (user.role != "admin" && user.role != "super_admin") {
        throw new AppError("Anda tidak diizinkan untuk membuat payment", 403);
    }
    const paymentMethod = await payment_methods.findByPk(id);
    if (!paymentMethod) {
        throw new AppError("Payment method tidak tersedia", 404);
    }
    const oldLogo = path.join(__dirname, "..", "..", "public", "uploads", paymentMethod.logo_url);
    if (fs.existsSync(oldLogo)) {
        fs.unlinkSync(oldLogo);
        console.log("logo lama dihapus");
    }
    let logoUrl = paymentMethod.logo_url;
    if (file) {
        logoUrl = `images/${file.filename}`;
    }
    await paymentMethod.update({
        name, 
        type,
        provider,
        description,
        logo_url: logoUrl,
        is_active
    });
    return paymentMethod;
}

const deletePaymentMethod = async (user, id) => {
    if (user.role != "admin" && user.role != "super_admin") {
        throw new AppError("Anda tidak diizinkan untuk membuat payment", 403);
    }
    return await payment_methods.destroy({
        where: {
            id: id
        }
    });
}

const deletePaymentMethods = async (user, ids) => {
    console.log(ids);
    if (user.role === "admin" && user.role !== "super_admin") {
        throw new AppError("Anda tidak diizinkan untuk menghapus payment method", 403);
    }
    return await payment_methods.destroy({
        where: {
            id: {
                [Op.in]: ids
            }
        }
    });
}

const getPaymentMethods = async ({ search }, protocol, host) => {
    if (!search) {
        search = "";
    }
    const paymentMethods = await payment_methods.findAll({
        where: {
            [Op.or]: [
                { name: { [Op.like]: `%${search}%` } },
                { description: { [Op.like]: `%${search}%` } },
                { provider: { [Op.like]: `%${search}%` } },
                { type: { [Op.like]: `%${search}%` } },
            ]
        },
        order: [["createdAt", "DESC"]]
    });
    const newPaymentMethods = paymentMethods.map(value => {
        const paymentMethod = value.toJSON();
        console.log(paymentMethod);
        paymentMethod.logo_url = `${protocol}://${host}/${paymentMethod.logo_url}`;
        return { ...paymentMethod };
    })
    return newPaymentMethods;
}

module.exports = { createPaymentMethod, updatePaymentMethod, deletePaymentMethod, getPaymentMethods, deletePaymentMethods };