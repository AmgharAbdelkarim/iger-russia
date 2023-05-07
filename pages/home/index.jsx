/* eslint-disable @next/next/no-img-element */
// eslint-disable
import React from "react"
import Head from "next/head"
import Layout from "../../components/layout"
import CustomizedCarousel from "../../components/Carousel"
import Image from "next/image"
import ContactForm from "../../components/ContactForm"
import AccommodationSupportIcon from "../../assets/icons/apartment-icon.svg"
import SupportAgentIcon from "../../assets/icons/support-agent-icon.svg"
import TranslateIcon from "../../assets/icons/translate-icon.svg"

const images = ["/images/russia1.jpg", "/images/russia2.jpg"]

const Home = () => {
  return (
    <div className="h-full">
      <Head>
        <title>Study IGER</title>
        <meta name="description" content="Study In Russia" />
        <meta property="og:title" content="Study In Russia" />
        <meta property="og:description" content="Study In Russia" />
        <meta property="og:url" content="https://www.studyiger.com" />
        <meta property="og:type" content="website" />
      </Head>
      <Layout>
        <div className="relative w-full">
          <h1 className="absolute z-10 top-1/2 left-11 text-white text-5xl font-bold">
            Welcome to study in Russia!
          </h1>
          <CustomizedCarousel showIndicators={images.length > 1}>
            {images.map((srcImage) => (
              <div className="relative w-full h-[500px]" key={srcImage}>
                <Image
                  src={srcImage}
                  alt="slider"
                  layout="fill"
                  objectFit="fill"
                />
              </div>
            ))}
          </CustomizedCarousel>
        </div>

        <div className="max-w-screen-sm p-5 lg:p-0 lg:max-w-screen-lg md:max-w-screen-md mx-auto mt-20">
          <div className="flex justify-between flex-col  md:flex-col lg:flex-row items-center lg:items-start">
            <div className="mb-7 md:mb-7 lg:mb-0 ">
              <h1 className="text-secondary text-5xl font-bold mb-4">
                Study in Russia!
              </h1>
              <p className="text-neutral9 text-lg font-normal">
                The safety of our customers is our top priority!
              </p>
            </div>
            <div className="w-full md:w-full lg:w-1/2">
              <p className="text-neutral9 text-lg font-normal">
                Study in Russia is your most popular resource dedicated to help
                foreign students looking for education in Russian universities
                with all information they need in order to make informed
                decisions about Russia. You can study in English or in Russian
                language its your choice to choose! Our friendly and
                knowledgeable staff will ensure you receive good quality timely
                advice support in preparation for your education in Russia and
                your student life during your stay in Russia.{" "}
              </p>
            </div>
          </div>
        </div>
        {/* <div>
                    <h1>Why Russia?</h1>
                    <p>
                        There are around 1750000 international students studying in Russia each year it is our most sincere wish that every student experiences the country at its best. Russia has a long-standing tradition in high-quality education for all citizens. Russia has one of the best education systems in the world producing a literacy rate (98%) exceeding most European countries and USA.
                    </p>
                </div>
                <div>
                    <h1>How to get admission in Russian universities?</h1>
                    <p>Our advisors will help you in your universities we will advise you on all of the program options and helps you select the session destination and academic structure that will meet your study abroad needs. Your advisor assists you with the application process and the stages of planning for your amazing experience until your arrive to Russia</p> */}
        {/* {
                    push to contact us
                    Our staff are all specialized and can relate first hand to what it is like for your Education in Russia university in easy steps.

                    The team responsible for putting together this network is highly regarded and has been honored for their work in promoting Russian universities globally with activities such as conducting professional training seminars organizing direct marketing programs and conducting surveys.
                } */}
        {/* </div> */}
        <div className="my-20 p-5 lg:p-0 max-w-screen-sm lg:max-w-screen-lg md:max-w-screen-md mx-auto">
          <h1 className="text-primary text-2xl font-bold text-center mb-5">
            Our services{" "}
          </h1>
          <p className="text-neutral9 text-lg font-normal text-center my-5">
            We understand that there are many things to think about when you are
            planning to study in Russia. Whatever your goal and however much
            support you need, we have a service to suit you.
          </p>
          <div className="flex justify-between flex-col items-center  md:flex-col md:items-center lg:flex-row lg:items-start ">
            <div className="flex flex-col w-full hover:shadow-2xl p-10 rounded-lg items-center md:w-2/3 lg:w-1/3">
              <div className="w-12">
                <img alt="support-icon" src={SupportAgentIcon.src} />
              </div>
              <h3 className="text-secondary text-lg font-semibold my-3">
                Application Support Service
              </h3>

              <p className="text-neutral9 text-sm font-normal">
                Is the registration process to gain undergraduates admission in
                a Russian university, available to all students. Our advisors
                will assist with the application process, edit your personal
                statement and inform you of which documents are required and
                what deadlines must be met.
              </p>
            </div>
            <div className="flex flex-col  hover:shadow-2xl p-10 rounded-lg items-center w-full lg:w-1/3 my-7 lg:mx-7 lg:my-0 md:my-0 md:my-7 md:mx-0 md:w-2/3">
              <div className="w-12">
                <img alt="support-icon" src={AccommodationSupportIcon.src} />
              </div>
              <h3 className="text-secondary text-lg font-semibold my-3">
                Accommodation assistance
              </h3>

              <p className="text-neutral9 text-sm font-normal">
                We will reserve your accomodation in the university campus, to
                make your transfer smooth and everything prepared specially for
                you.
              </p>
            </div>
            <div className="flex flex-col  w-full lg:w-1/3  hover:shadow-2xl p-10 rounded-lg items-center md:w-2/3">
              <div className="w-12">
                <img alt="support-icon" src={TranslateIcon.src} />
              </div>
              <h3 className="text-secondary text-lg font-semibold my-3">
                Documents Translation
              </h3>
              <p className="text-neutral9 text-sm font-normal">
                Get your documents translated into Russian and notarized by a
                certified Russian notary. Timeframe: 1 to 3 days. To be admitted
                to studies, you will need to have your passport, education
                credentials and medical certificates translated.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="contact-us p-5 lg:p-0 max-w-screen-sm sm:max-w-screen-sm lg:max-w-screen-lg md:max-w-screen-md mx-auto mb-20">
          <h1 className="text-primary text-2xl font-bold text-center mb-5">
            Contact us{" "}
          </h1>
          <div className="flex flex-col items-center lg:items-start lg:flex-row md:flex-col mt-5">
            <div className="mb-7 ">
              <h1 className="text-secondary text-5xl font-bold mb-4 text-start sm:text-start lg:text-start md:text-start">
                Make Your First Step
              </h1>
              <p className="text-neutral9 text-sm font-normal w-full lg:w-3/4 sm:text-start lg:text-start md:text-start md:w-full ">
                We understand that there are many things to think about when you
                are planning to study in Russia. Whatever your goal and however
                much support you need, we have a service to suit you.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Home
