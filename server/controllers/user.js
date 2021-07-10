import { generateHashedPassword } from './auth.js';
import User from '../models/user.js';

export const getUser = async (req, res) => {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ message: "User not found." });
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
}

export const updateUser = async (req, res) => {

    const userExists = await User.findById(req.params.userId);
    if (!userExists) return res.status(404).json({ message: "User not found." });
    
    if (req.body.id == req.params.userId || req.body.isAdmin) {
        if (req.body.password) {
            try {
                req.body.password = await generateHashedPassword(req.body.password);
            } catch (e) {
                console.log(e.message);
                res.status(500).json({ message: e.message });
            }
        }

        try {
            const user = await User.findByIdAndUpdate(req.params.userId, { $set: req.body })
            res.status(200).json({ message: "User account was updated." });
        } catch (e) {
            console.log(e.message);
            res.status(500).json({ message: e.message });
        }

    } else {
        res.status(403).json({ message: "You can only update your own informations." })
    }
}

export const deleteUser = async (req, res) => {
    const userExists = await User.findById(req.params.userId);
    if (!userExists) return res.status(404).json({ message: "User not found." });

    if (req.body.id == req.params.userId || req.body.isAdmin) {
        try {
            const deleted = await User.deleteOne(req.params.userId);
            res.status(200).json({ message: "User deleted." });
        } catch (e) {
            console.log(e.message);
            res.status(500).json({ message: e.message });
        }
    } else {
        res.status(403).json({ message: "You can only delete your own account." });
    }
}