const { createAddress, getAddress, updateAddress, deleteAddres } = require("../services/addressService");

const createAddressController = async (req, res, next) => {
    const data = req.body;
    const user = req.user;
    try {
        const address = await createAddress(user, data);
        return res.json({
            message: "Berhasil menambahkan alamat",
            data: address
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}

const getAddressController = async (req, res, next) => {
    const user = req.user;
    try {
        const address = await getAddress(user);
        return res.json({
            data: address
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}
const updateAddressController = async (req, res, next) => {
    const user = req.user;
    const body = req.body;
    const { id } = req.params;
    try {
        const address = await updateAddress(user, {id, ...body});
        return res.json({
            message: "Berhasil update",
            data: address
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}
const deleteAddressController = async (req, res, next) => {
    const user = req.user;
    const { id } = req.params;
    try {
        await deleteAddres(user, { id });
        return res.json({
            message: "Berhasil delete Address"
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}

module.exports = { createAddressController, getAddressController, updateAddressController, deleteAddressController };