const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const connectDB = require('./DB/connect');

const app = express();
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true,
}));
app.use(express.json());


// connect db
connectDB()

const modelSchema = new mongoose.Schema({
    name: String,
    filePath: String
});

const Model = mongoose.model('Model', modelSchema);

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// Create uploads directory if not exists
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

// API endpoints
app.post('/upload', upload.single('model'), async (req, res) => {
    const model = new Model({
        name: req.body.name,
        filePath: req.file.path
    });
    await model.save();
    res.send(model);
});

app.get('/models', async (req, res) => {
    const models = await Model.find();
    res.send(models);
});

app.get('/models/:id', async (req, res) => {
    const model = await Model.findById(req.params.id);
    res.sendFile(path.resolve(model.filePath));
});

// Start the server
app.listen(5000, () => {
    console.log('Server started on http://localhost:5000');
});
