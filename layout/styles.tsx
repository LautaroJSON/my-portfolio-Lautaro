import styled from "styled-components"

export const LayoutContainer = styled.div``

export const LayoutChilderenConteiner = styled.main`
  margin-top: 100px;
  margin-left: 12rem;
  margin-right: 12rem;

  box-sizing: border-box;
  height: calc(100vh - 100px);
  display: flex;
  /* justify-content: center; */
  align-items: center;
  /* margin: 100px 12rem 0px 12rem; */

  @media (max-width: 540px) {
    margin: 70px 1rem 0px 1rem;
  }
`
