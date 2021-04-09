const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

//Initialize express server and port(Heroku or localhost)
const app = express()
const port = process.env.PORT

//Initialize express to parse JSON
app.use(express.json())

//Register routers
app.use(userRouter)
app.use(taskRouter)


//initilize server to listen on specified port
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})