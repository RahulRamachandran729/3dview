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

// Initialize multer with the storage configuration
const upload = multer({
    storage: storage,
    limits: { fileSize: 10000000 } // 10 MB limit
});

module.exports = { upload };