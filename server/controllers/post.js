import Post from '../models/post.js';
import User from '../models/user.js';

export const getPost = async (req, res) => {

    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).json({ message: "Post not found." });
    res.status(200).json(post);
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

    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).json({ message: "Post not found." });

    if (post.author === req.body.author) {
        try {
            const updatedPost = await Post.findByIdAndUpdate(req.params.postId, { $set: req.body })
            res.status(200).json({ message: "Post infos updated." });
        } catch (e) {
            console.log(e.message);
            res.status(500).json({ message: e.message });
        }
    } else {
        res.status(403).json({ message: "You cannot modify a post that's not yours." })
    }
}

export const deletePost = async (req, res) => {

    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).json({ message: "Post not found." });

    if (post.author === req.body.author) {
        try {
            post.deleteOne({$set: req.body});
            res.status(200).json({ message: "Post deleted." });
        } catch (e) {
            console.log(e.message);
            res.status(500).json({ message: e.message });
        }
    } else {
        res.status(403).json({ message: "You cannot delete a post that's not yours." })
    }
}

export const likePost = async (req, res) => {

    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).json({ message: "Post not found." });

    const user = await User.findById(req.body.userId);
    if (!user) return res.status(404).json({ message: "User not found." });

    try {
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({$push: { likes: req.body.userId }});
            await user.updateOne({$push: { likedPosts: req.params.postId }});

            res.status(200).json({ message: "Post liked." });
        } else {
            await post.updateOne({$pull: { likes: req.body.userId }});
            await user.updateOne({$pull: { likedPosts: req.params.postId }});
            res.status(200).json({ message: "Post unliked." });
        }
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: e.message });
    }
}

export const getTimeline = async(req, res) => {

    try {
        const user = await User.findById(req.params.userId);
        if (!user) return res.status(404).json({ message: "User not found." });
    
        const userPosts = await Post.find({ author: req.params.userId });
        const friendsPosts = await Promise.all(
            user.friends.map(friendId => Post.find({ author: friendId }))
        );
        const timelinePosts = friendsPosts.length > 0 ? userPosts.concat(...friendsPosts) : userPosts;
        res.status(200).json(timelinePosts); 

    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: e.message });
    }

}