import React from "react"
import Footer from "../footer"
import Header from "../header"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-full">
      <Header></Header>
      <main className="flex-1">{children}</main>
      <Footer></Footer>
    </div>
  )
}

export default Layout
