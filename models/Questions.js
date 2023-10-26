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
    },
    id_owner: {
        type: String,
        trim: true,
        required: true
    },
    email_owner:{
        type:String,
        trim:true,
        required:false
    },
    like: {
        type: Array,
        trim: false,
        required: true
    },
    dislike:{
        type: Array,
        trim: true,
        required: true
    }
})

export default mongoose.model("QuestionSchema", questionSchema);