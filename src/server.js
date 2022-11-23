
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTestAccount({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'frankie.bechtelar@ethereal.email',
        pass: 'DTvYrVCeG3K8PhPQY7'
    },
    secure: false,
    tls: {
        rejectUnauthorized: false,
    }
})

const server = express()

server.use(express.json())
server.use(cors())

server.get('/ping', (req, res) => {
    res.send('pong')
})

server.post('/send-email', async(req, res) => {
    console.log(req.body)

    const mailOptions = {
        from: 'ryganinaan@gmail.com',
        to: req.body.to,
        subject: 'Subject',
        text: req.body.text
    }

    await transporter.sendMail(mailOptions)

    res.send()
})

server.listen(8080, () => {
    console.log('Server started on 8080 port')
})