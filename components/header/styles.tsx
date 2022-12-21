import styled from "styled-components"

export const HeaderContent = styled.div`
  width: 100%;
  padding: 1rem 8rem;
  box-sizing: border-box;
  background-color: rgb(43, 42, 40);

  display: flex;
  // align-content: center;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;

  h2 {
    font-family: "Chivo Mono", monospace;
    justify-self: center;
  }

  ul {
    display: flex;
    list-style: none;
    gap: 30px;
  }

  a {
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
`
