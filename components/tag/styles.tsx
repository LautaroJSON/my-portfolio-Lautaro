import styled from "styled-components"

export const TagStyle = styled.div`
  color: #d1d1d13c;
  /* margin: 10px 0px; */
  /* margin-top: 10px; */
  /* padding: 8px 0px; */
  font-style: italic;
  @media (max-width: 540px) {
    font-size: 0.8rem;
    /* margin: 4px; */
  }
`
export const TagChildren = styled.div<{ lastChild?: boolean }>`
  /* margin: 0px 0px 0px 20px; */
  /* padding: 12px 0px 12px 0px; */
  /* padding: 0px 10px; */
  margin-left: ${(props) => (props.lastChild ? "40px" : "0px")};

  @media (max-width: 540px) {
    margin-left: ${(props) => (props.lastChild ? "0px" : "0px")};
    /* margin: 0px 0px 0px 12px; */
    /* font-size: 10%; */
  }
`
export const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 0px 0px 40px;
  @media (max-width: 540px) {
    margin: 0px 0px 0px 12px;
    /* font-size: 10%; */
  }
`
