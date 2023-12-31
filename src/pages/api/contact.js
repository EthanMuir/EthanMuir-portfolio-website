import nodemailer from "nodemailer"

export default async function ContacApi(req, res) {
    const {email, phone, first, last, message} = req.body

    console.log("got here");
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

    // try {
    //     const { method } = req;
    //     switch (method) {
    //       case "POST": {
    //         //Do some thing
    //         await sendMail({
    //             from:"ethanmuir12@gmail.com",
    //             to: "ethanmuir12@gmail.com",
    //             replyTo: email,
    //             subject: 'Contact form submission',
    //             html:`
    //             <p>Name: ${first} ${last}</p>
    //             <p>Phone: ${phone}</p>
    //             <p>Email: ${email}</p>
    //             <p>Message: ${message}</p>
    //             `
    //             }
    //         );
    //         res.status(200).send("Success");
    //         break;
    //       }
    //       case "GET": {
    //         //Do some thing
    //         res.status(200).send(req.auth_data);
    //         break;
    //       }
    //       default:
    //          res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
    //          res.status(405).end(`Method ${method} Not Allowed`);
    //         break;
    //     }
    //   } catch (err) {
    //     res.status(400).json({
    //       error_code: "api_one",
    //       message: err.message,
    //     });
    //   }
    try{
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
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