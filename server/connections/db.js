import mongoose from 'mongoose';

const connect = async(DB_URL) => {
    await mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log('Connected to the MongoDB database.'))
    .catch(err => console.log("Something went wrong when connecting to the MongoDB database."));
};

export default {
    connect
}