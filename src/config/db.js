import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect("mongodb://localhost:27017");
        console.log("connect DB");
    } catch (error) {
        console.log('ocurrio un error');
    }
}