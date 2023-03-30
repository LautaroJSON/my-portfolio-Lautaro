import styled from "styled-components"

export const LayoutContainer = styled.main`
  display: grid;
  grid-template-columns: 7fr 1fr;

  align-content: center;

  height: 100svh;

  @media screen and (max-width: 720px) {
    grid-template-rows: 1fr 120px;
    grid-template-columns: none;
  }
`

export const LayoutChilderenConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  overflow-y: scroll;

  /* height: 700px; */
  /* overflow-y: scroll; */
  /* padding: 0rem 12rem 0rem 10rem; */

  @media screen and (max-width: 1024px) {
    padding: 0rem 4rem 0rem 1.8rem;
  }

  @media screen and (max-width: 768px) {
    padding: 0rem 1rem 0rem 1rem;
  }
`
