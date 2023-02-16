import styled from "styled-components"

export const HeaderContent = styled.header`
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  z-index: 2;
  backdrop-filter: blur(10px);

  display: grid;
  grid-template-columns: 5fr 3fr;
  align-items: center;
  padding: 12px 120px;

  nav {
    height: 100%;
  }

  ul {
    display: flex;
    gap: 46px;
    margin: 0px;
    height: 100%;

    align-items: center;

    list-style: none;
    padding: 0px;
    white-space: nowrap;
  }

  a {
    animation-delay: 0.6s;
    animation: slidein-disaper 0.8s;
    animation-fill-mode: forwards;
    visibility: hidden;

    position: relative;
    text-decoration: none;
    color: white;
    cursor: pointer;
    font-size: 1rem;
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
    bottom: -4px;
    left: 0;
    width: 0;
    height: 4px;
    transition: width 0.3s ease-in-out;
  }

  a:hover::before {
    width: 100%;
  }

  .slidein-disaper-class {
    animation: slidein-disaper 1s;
    animation-fill-mode: forwards;
    visibility: hidden;
  }

  @media (max-width: 1045px) {
    grid-template-columns: 2fr 1fr;
    padding: 12px 80px;

    ul {
      gap: 30px;
    }

    a {
      padding: 0;
      font-size: 1.2rem;
    }
  }

  @media (max-width: 540px) {
    padding: 8px 20px;

    a {
      padding: 0;
      font-size: 1rem;
    }

    ul {
      padding: 0px;
      gap: 16px;
      align-items: center;
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
`
