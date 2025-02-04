import { Resend } from 'resend';
import dotenv from 'dotenv'
dotenv.config()
 const RESEND_API= "re_UAeBYUAr_8n5TXBk26twmsFkq8yFv6GM8"
if(!process.env.RESEND_API){
    console.log("Provide RESEND_API in side the .env file")
}

const resend = new Resend(process.env.RESEND_API || RESEND_API);

const sendEmail = async({sendTo, subject, html })=>{
    try {
        const { data, error } = await resend.emails.send({
            from: 'Farmer mARKET place  <noreply@devbhaga.com>',
            to: sendTo,
            subject: subject,
            html: html,
        });

        if (error) {
            return console.error({ error });
        }

        return data
    } catch (error) {
        console.log(error)
    }
}

export default sendEmail

