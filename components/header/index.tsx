import { HeaderContent, LogoContainer } from "./styles"
// import Image from "next/image"
import { Logo } from "components/logo"

interface ISection {
  name: string
  href: string
}

interface IHeader {
  sections: Array<ISection>
}

function Header({ sections }: IHeader) {
  return (
    <HeaderContent>
      <LogoContainer>
        <Logo />
        <h1>autaro Fernandez.</h1>
      </LogoContainer>
      <ul>
        {sections.map((sec) => {
          return (
            <li key={sec?.name}>
              <a href={sec.href}>{sec?.name}</a>
            </li>
          )
        })}
      </ul>
    </HeaderContent>
  )
}

export default Header
