const express =require("express");
const cors=require("cors");
const multerApp=require("./controller/user");
const bodyParser=require("body-parser")

const app =express();

app.use(express.json());
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true,
})
);

app.use("/",express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', multerApp);


// Global error handler for unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // Application specific logging, throwing an error, or other logic here
    process.exit(1); // Optional: Exit the process if needed
});


module.exports=app;

