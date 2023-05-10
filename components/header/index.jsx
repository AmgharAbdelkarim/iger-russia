/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import Logo from "../../assets/icons/study-iger-logo.svg"

const Header = () => {
  const [navToggle, setNavToggle] = useState(false)
  const { route } = useRouter()

  return (
    <div className="bg-secondary sticky top-0 z-30 shadow-xl">
      <div className="container md:px-0 md:mx-auto">
        <div className="flex justify-between lg:justify-between md:justify-between items-center relative">
          <Link href="/" passHref legacyBehavior>
            <div className="mr-6 flex items-center justify-start h-20">
              <img src={Logo.src} alt="logo" width="64px" height="64px" />

              <div className="hidden lg:block md:hidden w-60 ml-2">
                <h1 className="text-lg capitalize font-bold">
                  International group for education in Russia (IGER)
                </h1>
              </div>
            </div>
          </Link>

          <div className="flex flex-row-reverse sm:flex-row items-center">
            <button
              id="menuBtn"
              className={
                navToggle
                  ? "hamburger block focus:outline-none outline-none sm:hidden open pr-4 sm:pr-0"
                  : "pr-4 sm:pr-0 hamburger block focus:outline-none outline-none sm:hidden"
              }
              type="button"
              onClick={() => setNavToggle(!navToggle)}
            >
              <span className="hamburger__top-bun"></span>
              <span className="hamburger__middle-bun"></span>
              <span className="hamburger__bottom-bun"></span>
            </button>
            <ul
              className={
                navToggle
                  ? "flex flex-col content-center justify-center p-5 list-none sm:w-auto fixed top-20 left-0 bg-secondary w-full"
                  : "flex flex-row content-center justify-center p-0 list-none sm:w-auto self-end sm:self-center absolute top-24 left-0 bg-transparent w-full sm:static sm:flex  sm:flex-row items-center h-full sm:flex list-none hidden sm:py-0 sm:pb-0"
              }
            >
              <li>
                <Link href="/" passHref legacyBehavior>
                  <span
                    className={`capitalize text-white mr-4 cursor-pointer hover:text-primary ${
                      route === "/" ? "text-primary" : ""
                    } `}
                  >
                    home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/studyinrussia" passHref legacyBehavior>
                  <span
                    className={`capitalize text-white hover:text-primary  mr-4 cursor-pointer ${
                      route === "/studyinrussia" ? "text-primary" : ""
                    } `}
                    href="/studyinrussia"
                  >
                    Study in Russia
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/universitiesinrussia" passHref legacyBehavior>
                  <span
                    className={`capitalize text-white hover:text-primary  mr-4 cursor-pointer ${
                      route === "/universitiesinrussia" ? "text-primary" : ""
                    } `}
                    href="/universitiesinrussia"
                  >
                    Universities in Russia
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/whyrussia" passHref legacyBehavior>
                  <span
                    className={`capitalize text-white hover:text-primary  mr-4 cursor-pointer ${
                      route === "/whyrussia" ? "text-primary" : ""
                    } `}
                    href="/whyrussia"
                  >
                    Why Russia
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contactus" passHref legacyBehavior>
                  <span
                    className={`capitalize text-white hover:text-primary  mr-4 cursor-pointer  ${
                      route === "/contactus" ? "text-primary" : ""
                    } `}
                    href="/contactus"
                  >
                    Contact us
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
