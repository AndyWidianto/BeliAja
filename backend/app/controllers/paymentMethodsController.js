const { getPaymentMethods, createPaymentMethod, updatePaymentMethod, deletePaymentMethod, deletePaymentMethods } = require("../services/paymentMethodService");


const getPaymentMethodsController = async (req, res, next) => {
    const { search } = req.query || null;
    try {
        const paymentMethods = await getPaymentMethods({ search }, req.protocol, req.get("host"));
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
    const { name, type, provider, description, is_active } = req.body;
    const file = req.file;
    const user = req.user;
    try {
        const paymentMethods = await createPaymentMethod(user, { name, type, provider, description, file, is_active });
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
    const { name, type, provider, description, is_active } = req.body;
    const file = req.file;
    const { id } = req.params;
    const user = req.user;
    try {
        const paymentMethods = await updatePaymentMethod(user, { id, name, type, provider, description, file, is_active });
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
        await deletePaymentMethod(user, id);
        return res.json({
            message: "Berhasil menghapus payment method",
        })
    } catch (err) {
        console.error(err);
        next(err);
    }
}

const deletePaymentMethodsController = async (req, res, next) => {
    const { ids } = req.body;
    const user = req.user;
    try {
        await deletePaymentMethods(user, ids);
        return res.status(200).json({
            message: "Berhasil delete payment methods"
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}

module.exports = { createPaymentMethodController, updatePaymentMethodController, getPaymentMethodsController, deletePaymentMethodController, deletePaymentMethodsController };


