import styled from "styled-components"

export const LogoStyled = styled.div`
  width: 56px;
  height: 56px;

  box-sizing: border-box;
  border-radius: 6px;
  background-color: white;

  position: relative;

  transition: all 0.8s;

  &:before {
    content: "L";
    font-size: 2.4rem;
    font-weight: 600;
    position: absolute;
    color: black;

    bottom: -5px;
    right: 6px;
  }

  &:hover {
    box-shadow: 0 0 0 0.2em white;
    background-color: transparent;

    :before {
      color: white;
    }
  }

  @media (max-width: 1045px) {
    &:before {
      content: "L";
      font-size: 2.2rem;
      font-weight: 400;
    }

    width: 50px;
    height: 50px;
  }
`
