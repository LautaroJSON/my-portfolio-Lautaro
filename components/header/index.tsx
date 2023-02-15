import { HeaderContent } from "./styles"
// import Image from "next/image"
import { Logo } from "components/logo"
import Link from "next/link"

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
      <div className="slidein-disaper-class">
        <Logo />
      </div>
      <nav>
        <ul>
          {sections.map((sec) => {
            return (
              <li key={sec?.name}>
                <Link href={sec.href}>{sec?.name}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </HeaderContent>
  )
}

export default Header
