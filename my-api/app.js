const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const jokes = require('./jokes.json')
app.use(cors())

app.get('/jokes', (req, res, next) => {
    res.json({jokes})
})

app.use((err, req, res, next) => {
    const status = err.status || 500
    res.status(status).json({ error : err })

})
app.use((req, res, next) => {
    res.status(404).json({ error : { message : "Not Found."}})
})
const listener = () => console.log(`Listening on port ${port}`)
app.listen(port, listener)