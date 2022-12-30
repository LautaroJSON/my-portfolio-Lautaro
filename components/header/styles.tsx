import styled from "styled-components"

export const HeaderContent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;

  z-index: 2;

  width: 100%;
  top: 0;
  padding: 0.6rem 12rem 0.6rem 12rem;
  box-sizing: border-box;
  background-color: var(--secondaty-color);
  backdrop-filter: blur(10px);
  white-space: nowrap;

  position: fixed;

  ul {
    display: flex;
    list-style: none;
    gap: 58px;
  }

  a {
    animation: slidein-disaper 0.8s;
    animation-fill-mode: forwards;
    visibility: hidden;
    animation-delay: 0.6s;
    position: relative;
    text-decoration: none;
    color: white;
    cursor: pointer;
    /* padding: 10px; */
    font-size: 1.5rem;
  }

  a:active {
    background-color: var(--primary-color);
    color: black;
  }

  a:link {
    text-decoration: none;
  }

  a::before {
    content: "";
    position: absolute;
    background-color: var(--primary-color);
    bottom: 0;
    left: 0;
    width: 0%;
    height: 5%;
    transition: width 0.3s ease-in-out;
  }

  a:hover::before {
    width: 100%;
  }

  @keyframes slidein {
    from {
      position: relative;
      top: 30px;
      color: transparent;
    }

    to {
      position: relative;
      top: 0px;
    }
  }

  @keyframes slidein-disaper {
    from {
      position: relative;
      color: transparent;
      top: 30px;
    }

    to {
      visibility: visible;
      position: relative;
      top: 0px;
    }
  }

  @media (max-width: 540px) {
    gap: 30px;
    padding: 0.3rem 4rem;

    a {
      padding: 0;
      font-size: 1rem;
    }

    ul {
      padding: 0px;
      gap: 20px;
    }
  }

  @media (max-width: 540px) {
    gap: 30px;
    padding: 0.3rem 4rem;

    a {
      padding: 0;
      font-size: 1rem;
    }

    ul {
      padding: 0px;
      gap: 20px;
    }
  }
`

export const LogoContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 4px;
  animation: slidein-disaper 0.8s;

  h1 {
    position: relative;
    bottom: -18px;
    left: 2px;
    margin: 0px;
    font-weight: 600;
  }

  @media (max-width: 1045px) {
    h1 {
      display: none;
    }
  }

  transition: 0.2s;
`
