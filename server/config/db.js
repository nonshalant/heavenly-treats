const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const config = require('config');
const db = config.get('mongoURI')

const connectDB = async() => {
    try {
        await mongoose.connect(db)
        console.log("mongo Connected!") 
    } catch (error) {
        console.error(error.message)
        process.exit(1)
    }
}

module.exports = connectDB
 