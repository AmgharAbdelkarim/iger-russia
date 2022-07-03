import React from "react"

const Footer = () => {
  return (
    <div className="py-5 bg-secondary2">
      <footer className="flex justify-between items-center max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm flex-col md:flex-col lg:flex-row mx-auto">
        <p className="text-center text-sm text-white">
          ©2022 - IGER | All rights reserved
        </p>
        <ul className="flex flex-col lg:flex-row md:flex-row items-center justify-center p-0 text-center text-lg mb-0 list-none">
          <li className="list-inline-item">
            <a className="text-sm text-white hover:underline" href="/">
              Home
            </a>
          </li>
          <li className="list-inline-item px-2">
            <a
              className="text-sm text-white hover:underline"
              href="/studyinrussia"
            >
              Study in Russia
            </a>
          </li>
          <li className="list-inline-item px-2">
            <a
              className="text-sm text-white hover:underline"
              href="/universitiesinrussia"
            >
              Universities in Russia
            </a>
          </li>
          <li className="list-inline-item px-2">
            <a className="text-sm text-white hover:underline" href="/whyrussia">
              Why Russia
            </a>
          </li>
          <li className="list-inline-item">
            <a className="text-sm text-white hover:underline" href="/contactus">
              Contact us
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer
