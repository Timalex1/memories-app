import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import postRoutes from './routes/posts.js'

const app = express();
const CONNECTION_STRING = "mongodb://localhost/memories"

mongoose.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(4000, () => { }))
    .catch(e => console.log(e))

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use('/post', postRoutes)
