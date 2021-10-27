const mongoose = require('mongoose');
const config = require('config'); //get access to our variables
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db, {

        })
        console.log('MongoDB connected')
    } catch (error) {

        console.error('err', err.message)
        process.exit(1)
    }
}


module.exports = connectDB;