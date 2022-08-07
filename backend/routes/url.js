const express = require('express')
const router = express.Router()
const validurl = require('valid-url')
const shortid = require('shortid')
const config = require('config')
const Url = require('../models/URL')

// @route   POST /api/url/shorten
// @desc    Create short URL
router.post('/shorten', async (req, res) => {
    const { longUrl } = req.body
    const baseUrl = "https://link.imalok.me"

    if (!validurl.isUri(baseUrl)) {
        res.status(401).json("Invalid base URL")
    }
    // Create url code
    const urlCode = shortid.generate()
    console.log(longUrl)
    if (validurl.isUri(longUrl)) {
        try {
            let url = await Url.findOne({ longUrl })
            if (url) {
                res.json(url)
            } else {
                const shortUrl = baseUrl + '/' + urlCode
                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                })
                await url.save()
                res.json(url)
            }
        } catch (error) {
            res.status(500).json('Server error')
        }
    } else {
        res.status(401).json("Invalid URL given by user")
    }

})


module.exports = router