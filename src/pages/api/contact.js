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

    await new Promise((resolve, reject) => {
        // verify connection configuration
        transporter.verify(function (error, success) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log("Server is ready to take our messages");
                resolve(success);
            }
        });
    });
    
    await new Promise(() => {
        const mail = transporter.sendMail({
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
    })
    

    return res.status(200).json({message: "success" })
}