import styled from "styled-components"

export const HeaderContent = styled.div`
  width: 100%;
  padding: 1rem 8rem;
  box-sizing: border-box;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  background-color: rgb(38, 38, 38);
  white-space: nowrap;

  h2 {
    animation: slidein 0.6s;
    font-family: "Chivo Mono", monospace;
    justify-self: center;
    transition: 0.5s;
  }

  h2:hover {
    cursor: default;
    color: var(--primary-color);
    transition: 0.5s;
  }

  ul {
    display: flex;
    list-style: none;
    gap: 30px;
  }

  a {
    animation: slidein 0.6s;
    position: relative;
    text-decoration: none;
    cursor: pointer;
    padding: 10px;
    font-size: 1.5rem;
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
`
