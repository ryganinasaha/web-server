
import express from 'express'
import cors from 'cors'
import telegram from './telegram.js'
// import mailor from './mailer.js'



const server = express()

server.use(express.json())
server.use(cors())

server.get('/ping', (req, res) => {
    res.send('pong')
})

server.post('/send-order', async(req, res) => {
    console.log(req.body)

    await telegram.sendToPrivateChat(`
        <b>Email: ${req.body.from}</b>\nMassage: ${req.body.text}`
    )

    res.send()
})

server.listen(8080, () => {
    console.log('Server started on 8080 port')
})