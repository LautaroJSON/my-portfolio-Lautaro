import styled from "styled-components"

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-self: end;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 56px;

  font-size: 0.875rem;
  color: #ffffff4e;
  background-color: var(--secondaty-color);
`

export const GitCode = styled.div`
  a {
    text-decoration: none;
    color: inherit;
  }

  a::after {
    content: " ↗";
  }

  a::before {
    content: "// ";
  }
`
