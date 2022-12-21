import React from "react"
import Header from "../components/header"
import { LayoutContainer } from "./styles"

const Layout = ({ children }) => {
  const SECTIONS_HEADER: any = [
    { name: "Home" },
    { name: "About me" },
    { name: "Contact" },
  ]
  return (
    <LayoutContainer>
      <Header sections={SECTIONS_HEADER} />
      <div>{children}</div>
    </LayoutContainer>
  )
}

export default Layout
