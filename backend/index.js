const express = require('express')
const config = require('config')
const connectDB = require('./config/db')

const app = express()

// Connect to MongoDB
connectDB()


const port = config.get('port')

// Middleware
app.use(express.json({ extended: false }))

// Routes
app.use('/',require('./routes/index'))
app.use('/api/url',require('./routes/url'))


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})