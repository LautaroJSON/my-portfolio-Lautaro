import styled from "styled-components"

export const HomeSectionContainer = styled.section`
  display: grid;
  gap: 56px;
  grid-template-columns: 760px 300px;

  /* overflow-y: scroll; */

  @media screen and (max-width: 1024px) {
    grid-template-columns: none;
  }
  /* justify-content: center; */
  /* margin: auto; */
  /* flex-wrap: nowrap; */
  /* max-width: 760px; */

  .side-box {
    /* background-color: red; */
    width: 100%;
    height: 100%;

    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(2.5px);
    -webkit-backdrop-filter: blur(2.5px);
    border-radius: 1rem;

    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1024px) {
      width: 220px;
      height: fit-content;
      padding: 12px 12px;
      margin: auto;
      img {
        width: 200px;
        height: 150px;
      }
    }
  }
`

export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  /* display: grid;
  grid-template-columns: repeat(6, minmax(50px, 100px));
  grid-template-rows: repeat(2, 1fr); */

  /* box-sizing: border-box; */

  gap: 12px;
  padding: 0.8rem;
  margin: 0.5rem 0rem;

  /* min-width: 225px; */

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-radius: 1rem;

  .icon-content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
  }

  @media screen and (max-width: 720px) {
    margin: auto;
    width: 180px;

    .name-icon {
      display: none;
    }
  }
`
