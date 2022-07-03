// async..await is not allowed in global scope, must use a wrapper
import nodemailer from "nodemailer"
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.user,
      pass: process.env.pass,
      clientId: process.env.clientId,
      clientSecret: process.env.clientSecret,
      refreshToken: process.env.refreshToken,
    },
  })
  try {
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "odr4643@gmail.com", // sender address
      to: "amghar.abdelkarim1@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    })

    console.log("Message sent: %s", info.messageId)
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
    return info
  } catch (error) {
    return "error"
  }

  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

export default async function handler(req, res) {
  const result = await main()
  res.status(200).json({ result })
}
