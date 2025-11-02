const { profiles } = require("../../models");
const AppError = require("../untils/customError");

const getProfile = async (id) => {
    const profile = await profiles.findByPk(id);
    if (!profile) {
        throw new AppError("profile tidak tersedia", 404);
    }
    return profile;
}

const createProfile = async (user, {first_name, last_name, phone, avatar_url}) => {
    const profile = await profiles.create({
        user_id: user.id,
        first_name,
        last_name,
        phone, 
        avatar_url
    });

    return profile;
}

const updateProfile = async (user, {first_name, last_name, phone, avatar_url}) => {
    const profile = await findOne({
        where: {
            user_id: user.id
        }
    });
    if (!profile) {
        throw new AppError("Profile tidak tersedia", 404);
    }
    await profile.update({
        first_name,
        last_name,
        avatar_url
    });
    return profile;
}

module.exports = { getProfile, createProfile, updateProfile };