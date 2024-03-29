import Link from "next/link"
import React, { useState } from "react"
import { SidebarContainer } from "./styles"

interface ISection {
  name: string
  href: string
}

interface IHeader {
  sections: Array<ISection>
}

export const Sidebar = ({ sections }: IHeader) => {
  const [sectionIndex, setsectionIndex] = useState<number>(1)
  return (
    <SidebarContainer>
      <nav className="navbar">
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
      <Link
        href={sections[sectionIndex].href}
        onClick={() =>
          setsectionIndex(
            sections.length === sectionIndex + 1 ? 0 : sectionIndex + 1
          )
        }
      >
        <svg className="svg-icon" viewBox="0 0 20 20">
          <path
            fill="none"
            d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"
          ></path>
        </svg>
      </Link>
    </SidebarContainer>
  )
}
