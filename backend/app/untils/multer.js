const multer = require("multer");
const fs = require("fs");
const path = require("path");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const directory = path.join(__dirname,"..", "..", "public", "uploads", "images");
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory, { recursive: true });
            console.log("Berhasil menambahkan folder");
        }
        cb(null, directory);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

module.exports = upload;