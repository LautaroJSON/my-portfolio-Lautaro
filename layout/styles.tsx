import styled from "styled-components"

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-rows: 11fr 1fr;
  height: 100vh;
  /* flex-direction: column; */
  /* padding: 0px 40px; */
  /* height: 100vh; */
  /* display: flex; */
`

export const LayoutChilderenConteiner = styled.div`
  /* padding-top: 84px; */
  padding: 120px 310px 0px 80px;

  @media (max-width: 1120px) {
    padding: 80px 80px 0px 40px;
    h1 {
      font-size: 1rem;
    }
    /* padding: 70px 12px 0 0; */
    /* padding-top: 70px; */
  }

  @media (max-width: 540px) {
    padding: 60px 34px 0 0;
    /* padding-top: 70px; */
  }
`
