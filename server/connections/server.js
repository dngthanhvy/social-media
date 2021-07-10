import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

import authRoute from '../routes/auth.js';
import userRoute from '../routes/user.js';
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);

const connect = (PORT) => {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}.`)
    });
}

export default {
    connect
}