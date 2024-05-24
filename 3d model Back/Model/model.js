const mongoose =require("mongoose");

const modelSchema = new mongoose.Schema({
    name: String,
    filePath: String
});

module.exports= mongoose.model('Model', modelSchema);