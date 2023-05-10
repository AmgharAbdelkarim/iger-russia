import React from "react"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="py-5 bg-secondary2">
      <footer className="flex justify-between items-center max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm flex-col md:flex-col lg:flex-row mx-auto">
        <p className="text-center text-sm text-white">
          ©2022 - IGER | All rights reserved
        </p>
        <ul className="flex flex-col lg:flex-row md:flex-row items-center justify-center p-0 text-center text-lg mb-0 list-none">
          <li className="list-inline-item">
            <Link href="/" passHref legacyBehavior>
              <span className="text-sm text-white hover:underline cursor-pointer">
                Home
              </span>
            </Link>
          </li>
          <li className="list-inline-item px-2">
            <Link href="/studyinrussia" passHref legacyBehavior>
              <span className="text-sm text-white hover:underline cursor-pointer">
                Study in Russia
              </span>
            </Link>
          </li>
          <li className="list-inline-item px-2">
            <Link href="/universitiesinrussia" passHref legacyBehavior>
              <span className="text-sm text-white hover:underline cursor-pointer">
                Universities in Russia
              </span>
            </Link>
          </li>
          <li className="list-inline-item px-2">
            <Link href="/whyrussia" passHref legacyBehavior>
              <span className="text-sm text-white hover:underline cursor-pointer">
                Why Russia
              </span>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link href="/contactus" passHref legacyBehavior>
              <span className="text-sm text-white hover:underline cursor-pointer">
                Contact us
              </span>
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer
