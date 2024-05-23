const mongoose =require("mongoose")


const connectDB =()=>{
    mongoose.connect(process.env.MONGO_URL).then
    ((data)=> {
        console.log(`MongoDb connected with : ${data.connection.host}`);
    });
};

module.exports=connectDB