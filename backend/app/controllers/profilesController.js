const { getProfile, createProfile, updateProfile } = require("../services/profilesService");

const getProfileController = async (req, res, next) => {
    const { id } = req.params;

    try {
        const profile = await getProfile(id);
        return res.status(200).json({
            message: "berhasil mengambil data profile",
            data: profile
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}

const createProfileController = async (req, res, next) => {
    const { first_name, last_name, phone } = req.body;
    const avatar_url = req.files;
    const user = req.user;
    try {
        const profile = await createProfile(user, { first_name, last_name, phone, avatar_url });
        return res.json({
            message: "Berhasil membuat profile",
            data: profile
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}

const updateProfileController = async (req, res, next) => {
    const { first_name, last_name, phone } = req.body;
    const avatar_url = req.files;
    const user = req.user;
    try {
        const profile = await updateProfile(user, { first_name, last_name, phone, avatar_url });
    } catch (err) {
        console.error(err);
        next(err);
    }
}

module.exports = { getProfileController, createProfileController, updateProfileController };