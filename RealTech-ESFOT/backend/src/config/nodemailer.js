import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()

const transporter = nodemailer.createTransport({
    host: process.env.HOST_MAILTRAP,
    port: process.env.PORT_MAILTRAP,
    auth: {
        user: process.env.USER_MAILTRAP,
        pass: process.env.PASS_MAILTRAP
    }
})

const enviar = (to, subject, html) =>
    transporter.sendMail({ from: "RealTech-ESFOT <no-reply@realtech-esfot.com>", to, subject, html })

const sendMailToRegister = (email, token) =>
    enviar(email, "Confirma tu cuenta en RealTech-ESFOT", `
        <h1>RealTech-ESFOT</h1>
        <p>Hola, haz clic en el siguiente enlace para confirmar tu cuenta:</p>
        <a href="${process.env.URL_FRONTEND}/confirm/${token}">Confirmar cuenta</a>
    `)

const sendMailToRecoveryPassword = (email, token) =>
    enviar(email, "Recupera tu contraseña - RealTech-ESFOT", `
        <h1>RealTech-ESFOT</h1>
        <p>Haz clic en el siguiente enlace para restablecer tu contraseña:</p>
        <a href="${process.env.URL_FRONTEND}/reset/${token}">Restablecer contraseña</a>
    `)

export { sendMailToRegister, sendMailToRecoveryPassword }
