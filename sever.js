import express from "express";
require('dotenv').config()
import cors from 'cors'

const app = express()
import initRoutes from './src/routes/index'
import connectDB from "./src/config/connectDB.js";
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST","GET","PUT","DELETE"]
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
initRoutes(app)
connectDB()
const post = process.env.PORT || 8080



const listener = app.listen(post, () => {
    console.log(`Server is running on the port ${post}`)
})