import Post from '../models/post.js';

export const getPost = async (req, res) => {

}

export const createPost = async (req, res) => {

    const newPost = await new Post(req.body);

    try {
        await newPost.save();
        res.status(201).json(newPost);
        
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: e.message });
    }
}

export const updatePost = async (req, res) => {

}

export const deletePost = async (req, res) => {

}

export const likePost = async (req, res) => {

}
