import styled from "styled-components"

export const TagStyle = styled.div`
  color: #ffffff3a;
  font-family: "sans-serif";
  font-style: italic;
  letter-spacing: 0.15rem;

  @media screen and (max-width: 720px) {
    /* font-size: 0.1rem; */
    display: none;
  }
`
export const TagChildren = styled.div<{ lastChild?: boolean }>`
  margin-left: ${(props) => (props.lastChild ? "40px" : "0px")};

  @media screen and (max-width: 720px) {
    margin-left: ${(props) => (props.lastChild ? "0px" : "0px")};
  }
`
export const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* margin: 10px 0px 10px 40px; */
  margin: 10px 0px 10px 2.5rem;

  @media screen and (max-width: 720px) {
    margin: 0px;
  }
`
