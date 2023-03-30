import styled from "styled-components"

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  padding: 0px 30px;
  width: 10%;
  box-sizing: border-box;
  cursor: pointer;

  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  transition: background-color 1s;
  /* animation: blink 2s 3s infinite; */

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);

  :hover {
    animation: none;
    background-color: #ffffffee;
    a {
      color: #1b1b1b;
    }
    /* pointer-events: none; */
  }

  ::after {
    content: "";
    position: absolute;
    width: 20px;
    top: 0px;
    bottom: 0px;
    left: 0px;
    transition: all 0.6s;
  }

  ::before {
    content: "";
    position: absolute;
    width: 10px;
    top: 0px;
    bottom: 0px;
    left: 0px;
    transition: all 0.6s;
  }

  :hover::after {
    left: -27px;
    background-color: white;
  }

  :hover::before {
    left: -50px;
    background-color: white;
  }

  ul {
    margin: 0px;
    padding: 0px;

    list-style: none;
    white-space: nowrap;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 1rem;

    font-weight: 500;
    /* padding: 1rem; */
  }

  a:active {
    background-color: var(--primary-color);
    color: black;
  }

  a:link {
    text-decoration: none;
  }

  h1 {
    animation: slide 1s infinite;
  }

  h1:hover {
    animation: none;
    color: #1b1b1b;
  }

  /* a::before {
    content: "";
    position: absolute;
    background-color: var(--primary-color);
    bottom: -4px;
    left: 0;
    width: 0;
    height: 4px;
    transition: width 0.3s ease-in-out;
  }

  a:hover::before {
    width: 100%;
  } */

  @media screen and (max-width: 720px) {
    /* justify-self: end; */
    position: initial;
    height: 120px;
    width: 100%;
    box-sizing: border-box;

    ul {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
  }

  @keyframes blink {
    0% {
      background-color: #ffffff80;
    }
    100% {
      background-color: #ffffff35;
    }
  }

  @keyframes slide {
    0% {
      margin-left: 10px;
    }
    50% {
      margin-left: 0px;
    }
    100% {
      margin-left: 10px;
    }
  }
`
