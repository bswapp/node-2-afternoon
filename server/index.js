const express = require("express")
const app = express()
const msgCtrl = require('./controllers/messages_controller')

app.use(express.json())

// * Endpoints * //
const messagesBaseURL = "/api/messages"

app.post(messagesBaseURL, msgCtrl.create)

app.get(messagesBaseURL, msgCtrl.read)

app.put(`${messagesBaseURL}/:id`, msgCtrl.update)

app.delete(`${messagesBaseURL}/:id`, msgCtrl.delete)

const SERVER_PORT = 3001

app.listen(SERVER_PORT, () => {
    console.log(`Welcome to port ${SERVER_PORT}`)
})





