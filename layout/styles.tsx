import styled from "styled-components"

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-rows: 11fr 1fr;
  height: 100vh;
  overflow-x: hidden;
`

export const LayoutChilderenConteiner = styled.div`
  padding: 120px 310px 60px 80px;

  @media (max-width: 1120px) {
    padding: 80px 80px 20px 40px;
    h1 {
      font-size: 1rem;
    }
  }

  @media (max-width: 540px) {
    padding: 60px 34px 0 0;
  }
`
