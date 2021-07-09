import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

import usersRoutes from '../routes/users.js';
import widgetsRoutes from '../routes/widgets.js';
app.use('/users', usersRoutes);
app.use('/widgets', widgetsRoutes)

const connect = (PORT) => {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}.`)
    });
}

export default {
    connect
}