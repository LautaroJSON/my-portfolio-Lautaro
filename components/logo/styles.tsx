import styled from "styled-components"

export const LogoStyled = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;

  box-sizing: border-box;
  background-color: white;
  /* border-radius: 6px; */
  width: 46px;
  height: 46px;

  transition: all 0.6s;

  ::before {
    content: "L";
    font-size: 2rem;
    font-weight: 600;
    color: black;

    position: absolute;
    bottom: -5px;
    right: 5px;
  }
  /* 
  &:after {
    content: "autaro Fernandez.";
    font-size: 2rem;
    font-weight: 500;
    white-space: nowrap;

    position: absolute;
    bottom: -5px;
    left: 50px;
  } */

  :hover {
    box-shadow: 0 0 0 0.2em white;
    background-color: transparent;

    :before {
      color: white;
    }
  }

  @media (max-width: 1045px) {
    width: 42px;
    height: 42px;

    &:before {
      font-size: 2.2rem;
      font-weight: 600;
    }

    &:after {
      display: none;
    }
  }
`
