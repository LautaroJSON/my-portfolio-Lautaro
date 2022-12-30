import styled, { css } from "styled-components"

export const HomeSectionContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  /* box-sizing: border-box; */

  hr {
    border: 2px dashed white;
    margin: 20px;
  }

  /* background-color: #3d3d3dbc; */
  /* border-radius: 10px; */

  @media (max-width: 540px) {
    a {
      padding: 0;
      font-size: 1rem;
    }

    ul {
      padding: 0px;
    }
  }
`
export const HomePetContainer = styled.div`
  /* width: min-content; */
  /* grid-column: 2 / 3; */

  /* grid-column: 3; */
`
export const HomeTextContainer = styled.div`
  /* display: flex; */
  /* flex-wrap: wrap; */
  max-width: 1200px;
  height: 100%;
  /* flex-direction: row; */
  /* align-items: stretch; */

  /* height: fit-content; */
  /* border: 1px solid red; */

  /* display: flex; */
  /* row-gap: 100px; */
  /* align-items: end; */

  h1 {
    font-size: 3.5rem;
  }

  h2 {
    font-size: 3rem;
  }

  h1,
  h2 {
    margin: 0px;
  }

  p {
    font-size: 1.4rem;
    color: #ffffff;
    margin: 0;
  }

  .bubble {
    /* margin: 50px; */
    padding: 12px;
    width: fit-content;

    position: relative;
    border-radius: 8px;
    background-color: var(--secondaty-color-solid);
  }

  .bubble:after {
    content: "";
    position: absolute;
    top: 90%;
    right: 0px;
    border-top: 20px solid var(--secondaty-color-solid);
    border-left: 20px solid transparent;
  }

  @media (max-width: 540px) {
    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`
