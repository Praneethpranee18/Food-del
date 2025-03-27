import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://praneethmahapathro:301005@cluster0.a7n48.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}
//mongodb+srv://praneethmahapathro:301005@cluster0.a7n48.mongodb.net/food-del

