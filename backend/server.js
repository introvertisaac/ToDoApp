//imports
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/ToDoRoute')
const cors = require('cors')

//initialization
require('dotenv').config()


const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())
mongoose.connect(process.env.MONGODB_URL)
.then(()=> {
    console.log('connected to MONGODB successfully')
})
.catch((err)=> console.log(err))

app.use(routes)

app.listen(PORT, () => console.log(`listening on ${PORT}`));
//middlewares
