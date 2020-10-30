const location = require('./routers/location.js')
const screening = require('./routers/screening.js')
const viewer = require('./routers/viewer.js')

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
// app.use(express.static("public"))

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log("on port", PORT))

const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://127.0.0.1:27017'
const dbName = 'cine-pub'

MongoClient.connect(url, {useUnifiedTopology: true},  (err, client) => {
    if(err) return console.log(err)

    db = client.db(dbName)
    app.use("/locations", location)
    app.use("/screenings", screening)
    app.use("/viewers", viewer)
})

