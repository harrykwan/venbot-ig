const express = require('express')
const igsearch = require('./src/search.js')
const app = express()
const port = 3000




app.get('/searchtag/:tag', (req, res) => {
    igsearch.searchtag(req.params.tag, function (result) {
        res.send(result)
    })
})

app.get('/searchuser/:userid', (req, res) => {
    igsearch.searchuser(req.params.userid, function (result) {
        res.send(result)
    })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))