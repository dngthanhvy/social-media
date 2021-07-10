import User from '../models/user.js';
import bcrypt from 'bcrypt';

export const generateHashedPassword = async(password) => {
    
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    return hashed;
}

export const authRegister = async(req, res) => {

    const hashedPassword = await generateHashedPassword(req.body.password);

    const user = await new User({
        username: req.body.username,
        password: hashedPassword,
        email: req.body.email
    });

    try {
        await user.save();
        res.status(201).json(user);
    } catch (e) {
        console.log(e.message);
        res.status(409).json({ message: e.message });
    }
}

export const authLogin = async(req, res) => {

    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(404).json({ message: 'User not found.' });

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).json({ message: 'Invalid credentials' });

        res.status(200).json(user);

    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: e.message });
    }
}