import React from "react"
import TextField from "../TextField"

const ContactForm = () => {
   const sendEmail = async () => {
     const response = await fetch(`/api/send-email`, {
       method: "GET",
       headers: {
         "Content-Type": "application/json",
       },
     })

     console.log({ response })
   }
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row   items-center justify-between">
        <div className="w-full mr-1">
          <TextField
            label="First Name"
            name="text"
            id="first-name"
            placeholder="joe"
          />
        </div>
        <div className="w-full ml-1">
          <TextField
            label="Last Name"
            name="text"
            id="last-name"
            placeholder="joe"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row  items-center justify-between">
        <div className="w-full mr-1">
          <TextField
            label="Email Adress"
            name="email"
            id="your-email"
            placeholder="you@example.com"
          />
        </div>
        <div className="w-full ml-1">
          <TextField
            label="Phone number"
            name="text"
            id="your-phone"
            placeholder="+333333333333"
          />
        </div>
      </div>
      <TextField
        label="Subject"
        name="text"
        id="subject"
        placeholder="Subject"
      />
      <TextField
        label="Message"
        name="text"
        id="message"
        placeholder="Message"
        type="textarea"
      />
      <button
        className={
          "flex items-center w-40 shadow-sm bg-primary transition-colors transition-shadow focus:ring-2 focus:ring-offset-1 hover:bg-primary-dark justify-center border relative  rounded-lg  p-4  outline-none focus:outline-none"
        }
        type="submit"
        onClick={sendEmail}
      >
        <span className="text-white">Send</span>
      </button>
    </div>
  )
}

export default ContactForm
