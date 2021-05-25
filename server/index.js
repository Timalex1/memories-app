import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import postRoutes from './routes/posts.js'

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000

mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => { }))
    .catch(e => console.log(e))

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use('/post', postRoutes)
