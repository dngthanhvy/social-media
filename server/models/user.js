import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        default: ""
    },
    coverPicture: {
        type: String,
        default: ""
    },
    friends: {
        type: Array,
        default: []
    },
    likedPosts: {
        type: Array,
        default: []
    },
    commentedPosts: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    desc: {
        type: String,
        default: ""
    },
    city: {
        type: String,
        default: ""
    },
    from: {
        type: String,
        default: ""
    },
    relationship: {
        type: Number,
        enum: [0, 1, 2, 3]
    }
}, {timestamps: true})

export default mongoose.model("User", userSchema);