import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    category: {
        type: String,
        trim: true,
        required: true
    }
})

export default mongoose.model("QuestionSchema", questionSchema);