import styled from "styled-components"

export const TagStyle = styled.div`
  color: #ffffff30;
  font-style: italic;
  letter-spacing: 0.1rem;
  @media (max-width: 540px) {
    font-size: 0.8rem;
  }
`
export const TagChildren = styled.div<{ lastChild?: boolean }>`
  margin-left: ${(props) => (props.lastChild ? "40px" : "0px")};

  @media (max-width: 540px) {
    margin-left: ${(props) => (props.lastChild ? "0px" : "0px")};
  }
`
export const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 0px 0px 40px;
  @media (max-width: 540px) {
    margin: 0px 0px 0px 12px;
  }
`
