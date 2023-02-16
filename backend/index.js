require('dotenv').config()
const express = require('express')
const config = require('config')
const connectDB = require('./config/db')
var cors = require('cors')

const app = express()

app.use(cors({
  origin: ['http://localhost:3000', 'https://www.urlshortner.imalok.me/','url-shortner-gamma-murex.vercel.app','urlshortner.imalok.me']
}));
app.use(express.json())

// Connect to MongoDB
connectDB()


const port = process.env.PORT || 3000

// Middleware
app.use(express.json({ extended: false }))

// app.get('/', (req, res) => {
//     res.send('<center><h1>Welcome to URL Shortner Backend</h1>')
// })


// Routes
app.use('/',require('./routes/index'))
app.use('/api/url',require('./routes/url'))


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
