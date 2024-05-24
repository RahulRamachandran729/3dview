const mongoose = require("mongoose")
 

// const connectDB = () => {
//     return (
//         mongoose.connect(`mongodb+srv://rahulramachandran729:PXaYF6imviTLUHFh@3dmodelview.skjkbgu.mongodb.net/?retryWrites=true&w=majority`)
//     )
    
// };
// const connectDB = async () => {
//     try {
//         await mongoose.connect(`mongodb+srv://rahulramachandran729:PXaYF6imviTLUHFh@3dmodelview.skjkbgu.mongodb.net/?retryWrites=true&w=majority`, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('Connected to MongoDB');
//     } catch (err) {
//         console.error('Error connecting to MongoDB:', err);
//         throw err; // Rethrow the error to be caught by the caller
//     }
// };

const connectDB = async () =>{
    mongoose.connect(`mongodb+srv://rahulramachandran729:PXaYF6imviTLUHFh@3dmodelview.skjkbgu.mongodb.net/?retryWrites=true&w=majority`).then
    (()=> {
        console.log(`MongoDb connected`);
    });//to display the name of the host using chaining
};

module.exports=connectDB;

