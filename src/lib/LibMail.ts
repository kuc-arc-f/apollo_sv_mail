
import LibCsrf from "./LibCsrf"
import Config from "../../config"
const mailer = require("nodemailer");

interface IArgs {
  to_mail: string,
  title: string,
  body: string,
}
//
const LibMail = {
  sendMail :async function(args: IArgs){
    try {
console.log(args);
      const valid = await LibCsrf.validToken(args);
      const receiverEmailAddress = args.to_mail;
      console.log(Config.SMTP_HOST);
      console.log(Config.SMTP_PORT);
      console.log(Config.SMTP_AUTH_USER);
      console.log(Config.SMTP_AUTH_PASS);
      console.log(Config.SEND_MAIL_ADDRESS);
      let transporter = mailer.createTransport({
        host: Config.SMTP_HOST,
        port: Config.SMTP_PORT,
        secure: Config.SMTP_SECURE,
        auth: {
          user: Config.SMTP_AUTH_USER,
          pass: Config.SMTP_AUTH_PASS,
        },
      });
      let body = args.body;
      body = body.replace(/<br \/>/gi, '\r\n');
      let info = await transporter.sendMail({
        from: Config.SEND_MAIL_ADDRESS,
        to: receiverEmailAddress,
        subject: args.title,
        text: body,
      });
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", mailer.getTestMessageUrl(info));     
      return "OK";
    } catch (err) {
      console.error(err);
      throw new Error('Error , sendMail');
    }          
  },

}
export default LibMail;
