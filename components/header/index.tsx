import React from "react"
import { HeaderContent } from "./styles"

interface ISection {
  name: string
}

interface IHeader {
  sections?: Array<ISection>
}

function Header({ sections }: IHeader) {
  return (
    <HeaderContent>
      <h2>Lautaro Fernandez // Full-Stack Develop</h2>
      <ul>
        {sections.map((sec) => {
          return (
            <li key={sec?.name}>
              <a>{sec?.name}</a>
            </li>
          )
        })}
      </ul>
    </HeaderContent>
  )
}

export default Header
