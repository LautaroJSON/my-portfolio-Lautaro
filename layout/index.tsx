import Footer from "components/footer"
import Header from "components/header"
import Tag from "components/tag"
import { LayoutChilderenConteiner, LayoutContainer } from "./styles"

interface ILayout {
  children: JSX.Element
}
export const SECTIONS_HEADER: Array<{ name: string; href: string }> = [
  { name: "Home", href: "/home" },
  { name: "About me", href: "/about" },
  { name: "Contact", href: "/contact" },
]

const Layout = ({ children }: ILayout) => {
  return (
    <LayoutContainer>
      <Header sections={SECTIONS_HEADER} />
      <LayoutChilderenConteiner>
        <Tag tagName="main">{children}</Tag>
      </LayoutChilderenConteiner>
      <Footer />
    </LayoutContainer>
  )
}

export default Layout
