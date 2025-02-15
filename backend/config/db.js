import mongoose from "mongoose";


export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://sujiviji2640:wthpxlZk8qhoNP0w@cluster0.tfq8x.mongodb.net/zomato-projects').then(()=>console.log("DB Connected"));
}