import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

import authRoute from '../routes/auth.js';
import userRoute from '../routes/user.js';
import postRoute from '../routes/post.js';

app.use('/auth', authRoute);
app.use('/users', userRoute);
app.use('/posts', postRoute);

const connect = (PORT) => {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}.`)
    });
}

export default {
    connect
}