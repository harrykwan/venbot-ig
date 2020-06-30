const express = require('express')
const igsearch = require('./src/search.js')
const app = express()
const port = 3000


// igsearch.searchtag('developer', function (result) {

// })



app.get('/searchuser', (req, res) => {
    igsearch.searchuser('yph_ay', function (result) {
        res.send(result)
    })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))