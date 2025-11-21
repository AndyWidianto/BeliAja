const AppError = require("../untils/customError");
const { addresses, users } = require("../../models");

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

const updateAddress = async (user, { id, name, phone_number, complete_address, province, city_or_district, subdistrict, postal_code, additional_notes }) => {
    const findAddres = await addresses.findByPk(id, {
        include: [
            {
                model: users
            }
        ]
    });
    if (user.id !== findAddres.user.id) {
        throw new AppError("anda tidak di perbolehkan mengubah address", 403);
    }
    if (!findAddres) {
        throw new AppError("Alamat tidak di temukan", 404);
    }
    if (!name || !phone_number || !complete_address || !province || !city_or_district || !subdistrict || !postal_code) {
        throw new AppError("Mohon semuanya", 404);
    }
    await findAddres.update({
        name,
        phone_number,
        complete_address,
        province,
        city_or_district,
        subdistrict,
        postal_code,
        additional_notes
    });
}
const deleteAddres = async (user, { id }) => {
    const findAddres = await addresses.findByPk(id);
    if (findAddres.user_id !== user.id) {
        throw new AppError("anda tidak diizinkan untuk menghapus", 403);
    }
    return await addresses.destroy({
        where: {
            id: id
        }
    });
}
const getAddress = async (user) => {
    const address = await addresses.finAll({
        where: {
            user_id: user.id
        }
    });
    return address;
}

module.exports = { createAddress, getAddress, updateAddress, deleteAddres };
