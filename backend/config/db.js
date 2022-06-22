require('dotenv').config()
const mongoose = require('mongoose')
const db = process.env.MONGOURI

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
        })
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

module.exports = connectDB