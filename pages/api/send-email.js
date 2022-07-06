// async..await is not allowed in global scope, must use a wrapper
import nodemailer from "nodemailer"
async function main({
  subject,
  firstName,
  lastName,
  email,
  message,
  phoneNumber,
}) {
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
      to: "studyiger@gmail.com", // list of receivers
      subject, // Subject line
      text: `
      name : ${firstName} ${lastName}
      email : ${email}
      phoneNumber: ${phoneNumber}
      message : ${message}
      `, // plain text body
      html: `
      name : ${firstName} ${lastName}
      email : ${email}
      phoneNumber: ${phoneNumber}
      message : ${message}
      `, // html body
    })

    return info
  } catch (error) {
    return error
  }

  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

export default async function handler(req, res) {
  const { subject, firstName, lastName, email, message, phoneNumber } = req.body

  const result = await main({
    subject,
    firstName,
    lastName,
    email,
    message,
    phoneNumber,
  })
  res.status(200).json({ result })
}
