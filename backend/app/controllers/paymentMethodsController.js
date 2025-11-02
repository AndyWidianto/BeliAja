const { getPaymentMethods, createPaymentMethod, updatePaymentMethod, deletePaymentMethod } = require("../services/paymentMethodService");


const getPaymentMethodsController = async (req, res, next) => {
    const { search } = req.query || null;
    try {
        const paymentMethods = await getPaymentMethods(search);
        return res.json({
            message: "Berhasil mengambil data",
            data: paymentMethods
        })
    } catch (err) {
        console.error(err);
        next(err);
    }
}

const createPaymentMethodController = async (req, res, next) => {
    const { name, type, provider, description, logo_url, is_active } = req.body;
    const user = req.user;
    try {
        const paymentMethods = await createPaymentMethod(user, { name, type, provider, description, logo_url, is_active });
        return res.json({
            message: "Berhasil menambahkan payment method",
            data: paymentMethods
        })
    } catch (err) {
        console.error(err);
        next(err);
    }
}

const updatePaymentMethodController = async (req, res, next) => {
    const { name, type, provider, description, logo_url, is_active } = req.body;
    const { id } = req.params;
    const user = req.user;
    try {
        const paymentMethods = await updatePaymentMethod(user, { id, name, type, provider, description, logo_url, is_active });
        return res.json({
            message: "Berhasil menambahkan payment method",
            data: paymentMethods
        })
    } catch (err) {
        console.error(err);
        next(err);
    }
}

const deletePaymentMethodController = async (req, res, next) => {
    const { id } = req.params;
    const user = req.user;
    try {
        const paymentMethods = await deletePaymentMethod(user, id);
        return res.json({
            message: "Berhasil menghapus payment method",
        })
    } catch (err) {
        console.error(err);
        next(err);
    }
}

module.exports = { createPaymentMethodController, updatePaymentMethodController, getPaymentMethodsController, deletePaymentMethodController };


