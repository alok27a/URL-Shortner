const express = require('express')
const config = require('config')
const connectDB = require('./config/db')
var cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

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