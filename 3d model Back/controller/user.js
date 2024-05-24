const express = require('express');
const { upload } = require('../multer'); // Adjust the path as necessary
const path = require('path');
const Model = require('../Model/model');
const fs = require('fs');
const app = express.Router();

// Ensure uploads directory exists
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads', { recursive: true });
}

app.post('/upload', upload.single('model'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send({ error: "File upload failed." });
        }
        const model = new Model({
            name: req.body.name,
            filePath: req.file.path
        });
        await model.save();
        res.status(200).send(model);
    } catch (err) {
        console.error("Error in /upload:", err);
        res.status(500).send({ error: "Internal server error." });
    }
});

app.get('/models', async (req, res) => {
    try {
        const models = await Model.find();
        res.send(models);
    } catch (err) {
        console.error("Error in /models:", err);
        res.status(500).send({ error: "Internal server error." });
    }
});

app.get('/models/:id', async (req, res) => {
    try {
        const model = await Model.findById(req.params.id);
        if (!model) {
            return res.status(404).send({ error: "Model not found." });
        }
        res.sendFile(path.resolve(model.filePath));
    } catch (err) {
        console.error("Error in /models/:id:", err);
        res.status(500).send({ error: "Internal server error." });
    }
});

module.exports = app;
