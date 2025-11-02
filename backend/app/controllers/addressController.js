const { createAddress, getAddress } = require("../services/addressService");

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

module.exports = { createAddressController, getAddressController };