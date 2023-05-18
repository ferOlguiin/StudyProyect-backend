import mongoose from "mongoose";
import { URI_MONGODB } from "./config.js";

export async function connectDB(){
    try {
        mongoose.set('strictQuery',false);
        const db = await mongoose.connect(URI_MONGODB);
        console.log("base de datos conectada con éxito a la colección:", db.connection.name);
    } catch (error) {
        console.log(error);
    }
}
