/* eslint-disable @next/next/no-img-element */
import React from "react"
import ContactForm from "../../components/ContactForm"
import Layout from "../../components/layout"
import PhoneIcon from "../../assets/icons/phone-icon.svg"
import PlacetIcon from "../../assets/icons/place-icon.svg"
import EmailIcon from "../../assets/icons/email-icon.svg"

const ContactUs = () => {
  return (
    <Layout>
      <div className="my-20 p-5 lg:p-0 lg:max-w-screen-lg md:max-w-screen-md max-w-screen-lg mx-auto">
        <h1 className="text-primary text-2xl font-bold text-center mb-5">
          Contact us{" "}
        </h1>
        <p className="text-neutral9 text-lg font-normal text-center my-5">
          SEND US AN EMAIL
        </p>
        <div className="flex flex-col lg:flex-row ">
          <div className="w-full mb-7 lg:mb-0 lg:w-3/4">
            <ContactForm />
          </div>

          <div className="flex flex-col ml-8">
            <div className="flex items-center">
              <div className="bg-primary mr-3 rounded-[50%] w-[50px] h-[50px] flex items-center justify-center">
                <img alt="support-icon" src={PlacetIcon.src} />
              </div>
              <div className="w-4/5">
                <h3 className="text-secondary text-lg font-semibold mb-1">
                  Address:
                </h3>
                <p className="text-neutral9 text-sm font-normal">
                  Moscow , Presnenskaya Naberezhnaya, 8 стр 1, Moscow, 123112
                </p>
              </div>
            </div>
            <div className="flex items-center my-10">
              <div className="bg-primary mr-3 rounded-[50%] w-[50px] h-[50px] flex items-center justify-center">
                <img alt="support-icon" src={PhoneIcon.src} />
              </div>
              <div className="w-4/5">
                <h3 className="text-secondary text-lg font-semibold mb-1">
                  Phone:
                </h3>
                <p className="text-neutral9 text-sm font-normal">
                  +79934403545
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-primary mr-3 rounded-[50%] w-[50px] h-[50px] flex items-center justify-center">
                <img alt="support-icon" src={EmailIcon.src} />
              </div>
              <div className="w-4/5">
                <h3 className="text-secondary text-lg font-semibold mb-1">
                  Email:
                </h3>
                <p className="text-neutral9 text-sm font-normal">
                  info@studyiger.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactUs
