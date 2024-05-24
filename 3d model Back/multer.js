const multer =require("multer");
const path=require ("path")

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

exports.upload = multer({ storage:storage });