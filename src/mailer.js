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
});

export default {
    sendToMail(text) {
        const mailOptions = {
            from: 'ryganinaan@gmail.com',
            to: 'ryganinaan@gmail.com',
            subject: 'Subject',
            text: text
        }

        return transporter.sendMail(mailOptions)
    }
}