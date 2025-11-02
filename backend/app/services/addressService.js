const AppError = require("../untils/customError");
const { addresses } = require("../../models");

const createAddress = async (user, { name, phone_number, complete_address, province, city_or_district, subdistrict, postal_code, additional_notes }) => {
    if (!name) {
        throw new AppError("nama wajib diisi", 404);
    }
    if (phone_number) {
        throw new AppError("nomor ponsel wajib diisi", 404);
    }
    if (complete_address) {
        throw new AppError("alamat lengkap wajib diisi", 404);
    }
    if (province) {
        throw new AppError("provinsi wajib diisi", 404);
    }

    const address = await addresses.create({
        user_id: user.id,
        name,
        phone_number,
        complete_address,
        province,
        city_or_district,
        subdistrict,
        postal_code,
        additional_notes
    });

    return address;
}

const getAddress = async (user) => {
    const address = await addresses.finAll({
        where: {
            user_id: user.id
        }
    });
    return address;
}

module.exports = { createAddress, getAddress};
