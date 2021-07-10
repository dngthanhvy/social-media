import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

import authRoute from '../routes/auth.js';
import userRoute from '../routes/user.js';
import postRoute from '../routes/post.js';

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);

const connect = (PORT) => {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}.`)
    });
}

export default {
    connect
}