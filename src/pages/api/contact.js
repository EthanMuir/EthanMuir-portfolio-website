import nodemailer from "nodemailer"

export default async function ContacApi(req, res) {
    const {email, phone, first, last, message} = req.body

    const data = {
        email, phone, first, last, message
    }

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "ethanmuir12@gmail.com",
            pass: "qjcr bzrb nvij cidy",
        },
    });

    try{
        const mail = await transporter.sendMail({
            from:"ethanmuir12@gmail.com",
            to: "ethanmuir12@gmail.com",
            replyTo: email,
            subject: 'Contact form submission',
            html:`
            <p>Name: ${first} ${last}</p>
            <p>Phone: ${phone}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
            `
        })
        console.log("Message Sent:", mail.messageId);
    } catch(error) {
        console.log(error)
        res.status(500).json({
            message: "Could not send email. Your message was not sent :(",
        })
    }
    return res.status(200).json({message: "success" })
}