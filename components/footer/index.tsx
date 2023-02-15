import { FooterContainer, GitCode } from "./styles"

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <span>© 2023 Lautaro Fernandez.</span>
      </div>
      <GitCode>
        <a
          href="https://github.com/LautaroJSON/my-portfolio-Lautaro"
          target="_blank"
          rel="noreferrer"
        >
          view code
        </a>
      </GitCode>
    </FooterContainer>
  )
}

export default Footer
