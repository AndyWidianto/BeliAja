const { Op } = require("sequelize");
const { payment_methods } = require("../../models");
const AppError = require("../untils/customError");

const createPaymentMethod = async (user, { name, type, provider, description, logo_url, is_active }) => {
    if (user.role != "admin" && user.role != "super_admin") {
        throw new AppError("Anda tidak diizinkan untuk membuat payment", 403);
    }
    const paymentMethod = await payment_methods.create({
        name, 
        type,
        provider,
        description,
        logo_url,
        is_active
    });
    return paymentMethod;
}

const updatePaymentMethod = async (user, { id, name, type, provider, description, logo_url, is_active }) => {
    if (user.role != "admin" && user.role != "super_admin") {
        throw new AppError("Anda tidak diizinkan untuk membuat payment", 403);
    }
    const paymentMethod = await payment_methods.findByPk(id);
    if (!paymentMethod) {
        throw new AppError("Payment method tidak tersedia", 404);
    }
    await paymentMethod.update({
        name, 
        type,
        provider,
        description,
        logo_url,
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

const getPaymentMethods = async (search) => {
    if (!search) {
        search = "";
    }
    const paymentMethods = await payment_methods.findAll({
        where: {
            [Op.like]: {
                [Op.or]: [
                    { name: search },
                    { description: search },
                    { provider: search },
                    { type: search }
                ]
            }
        }
    });
    return paymentMethods;
}

module.exports = { createPaymentMethod, updatePaymentMethod, deletePaymentMethod, getPaymentMethods };