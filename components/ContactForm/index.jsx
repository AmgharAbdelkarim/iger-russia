import React, { useState } from "react"
import TextField from "../TextField"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object().shape({
  first_name: yup.string().required("First Name is required"),
  last_name: yup.string().required("Last Name is required"),
  email: yup.string().required("Email is required").email("Email is invalid"),
  message: yup.string().required("message is required"),
  phone: yup.string().required("phone is required"),
})

const ContactForm = () => {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const sendEmail = async (data) => {
    setLoading(true)
    const {
      subject,
      first_name: firstName,
      last_name: lastName,
      email,
      message,
      phone: phoneNumber,
    } = data
    try {
      await fetch(`/api/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject,
          firstName,
          lastName,
          email,
          message,
          phoneNumber,
        }),
      })
      reset()
      setLoading(false)
    } catch {
      setLoading(false)
    }
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(sendEmail)}>
        <div className="flex flex-col lg:flex-row   items-center justify-between">
          <div className="w-full mr-1">
            <TextField
              label="First Name"
              name="first_name"
              placeholder="doe"
              errors={errors}
              register={register}
            />
          </div>
          <div className="w-full ml-1">
            <TextField
              label="Last Name"
              name="last_name"
              placeholder="joe"
              errors={errors}
              register={register}
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row  items-center justify-between">
          <div className="w-full mr-1">
            <TextField
              label="Email Adress"
              name="email"
              placeholder="you@example.com"
              errors={errors}
              register={register}
            />
          </div>
          <div className="w-full ml-1">
            <TextField
              label="Phone number"
              name="phone"
              placeholder="+212700000000"
              errors={errors}
              register={register}
            />
          </div>
        </div>
        <TextField
          label="Subject"
          name="subject"
          placeholder="Subject"
          register={register}
        />
        <TextField
          label="Message"
          name="message"
          id="message"
          placeholder="Message"
          type="textarea"
          errors={errors}
          register={register}
        />
        <button
          className={
            "flex items-center w-40 shadow-sm bg-primary transition-colors transition-shadow focus:ring-2 focus:ring-offset-1 hover:bg-primary-dark justify-center border relative  rounded-lg  p-4  outline-none focus:outline-none"
          }
          disabled={loading}
          type="submit"
        >
          <span className="text-white">{loading ? "Sending" : "Send"}</span>
        </button>
      </form>
    </div>
  )
}

export default ContactForm
