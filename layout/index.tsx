import Header from "../components/header"
import Tag from "../components/tag"
import { LayoutChilderenConteiner, LayoutContainer } from "./styles"

interface ILayout {
  children: JSX.Element
}
export const SECTIONS_HEADER: any = [
  { name: "Home", href: "#home" },
  { name: "About me", href: "#about-me" },
  { name: "Contact", href: "#contact" },
]

const Layout = ({ children }: ILayout) => {
  return (
    <LayoutContainer>
      <Header sections={SECTIONS_HEADER} />
      <LayoutChilderenConteiner className="animation-disaper">
        <Tag tagName="main">{children}</Tag>
      </LayoutChilderenConteiner>
    </LayoutContainer>
  )
}

export default Layout
