const express = require('express')
const morgan = require('morgan')

const { config } = require('./config/config')


const app = express()



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const usersRoutes = require('./components/users/routes')

app.use('/', usersRoutes)

app.listen(config.port, ()=>{
    console.log(`Server listeng at ${config.host}:${config.port}`)
})