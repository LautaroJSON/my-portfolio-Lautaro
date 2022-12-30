import styled from "styled-components"

export const TagStyle = styled.div`
  color: #d1d1d13c;
  /* border: 1px solid red; */
  margin: 10px;
  font-style: italic;
  @media (max-width: 540px) {
    font-size: 0.8rem;
  }
`
export const TagChildren = styled.div`
  margin: 0px 0px 0px 40px;
  /* padding: 0px 10px; */

  @media (max-width: 540px) {
    margin: 0px 0px 0px 20px;
    /* font-size: 10%; */
  }
`
