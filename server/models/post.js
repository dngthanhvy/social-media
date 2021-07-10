import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        default: "",
        max: 500
    },
    image: {
        type: String,
        default: ""
    },
    likes: {
        type: Array,
        default: []
    },
    comments: {
        type: Array,
        default: []
    }

}, {timestamps: true})

export default mongoose.model("Post", postSchema);