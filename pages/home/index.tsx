import styled from "styled-components"
import Tag from "components/tag"
import Image from "next/image"

const HomeSectionContainer = styled.section`
  @media (max-width: 540px) {
    a {
      padding: 0;
      font-size: 1rem;
    }

    ul {
      padding: 0px;
    }
  }
`
const HomeTextContainer = styled.div`
  /* max-width: 1280px; */
  /* height: 100%; */

  h1 {
    font-size: 3.5rem;
  }

  h2 {
    font-size: 3rem;
  }

  h1,
  h2 {
    margin: 0px;
  }

  p {
    font-size: 1.4rem;
    color: #ffffff;
    margin: 0;
  }

  .bubble {
    padding: 12px;
    width: fit-content;

    position: relative;
    border-radius: 8px;
    background-color: var(--secondaty-color-solid);
    margin-left: 40px;
  }

  .bubble:after {
    content: "";
    position: absolute;
    top: 90%;
    right: 0px;
    border-top: 20px solid var(--secondaty-color-solid);
    border-left: 20px solid transparent;
  }

  @media (max-width: 1120px) {
    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 540px) {
    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`
const Technologies = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  grid-gap: 20px;
  grid-auto-flow: dense;
  /* display: grid; */
  /* grid-auto-flow: column; */
  /* grid-template-columns: repeat("auto-fit", minmax(min(100%, 50px), 1fr)); */
  /* min-width: 200px; */
  /* flex-direction: row; */
  /* box-sizing: border-box; */
  /* height: 60px; */
  /* display: flex; */
  align-items: center;
  justify-items: center;
  /* flex-wrap: wrap; */
  /* min-width: 765px; */
  /* gap: 22px; */
  /* 
  flex-wrap: wrap; */
  /* gap: 1rem; */
  margin: 1rem 0px;
  padding: 1rem;
  background-color: #333;
  border-radius: 12px;

  img {
    filter: invert(100%);
    transition: all 0.6s;
  }

  img:hover {
    transform: scale(1.2);
  }

  @keyframes move {
    0% {
      margin-left: 0px;
    }

    50% {
      margin-left: 100px;
    }

    100% {
      margin-left: 0px;
    }
  }

  /* width: fit-content; */

  /* .animation {
    animation: automatizacion 1s infinite linear;
    transition: all 0.75s ease;
  }
  
  @keyframes automatizacion {
    0% {
      margin-left: 0;
    }
    30% {
      margin-left: 0;
    }
    35% {
      margin-left: -100%;
    }
    65% {
      margin-left: -100%;
    }
    70% {
      margin-left: -200%;
    }
    95% {
      margin-left: -200%;
    }
    100% {
      margin-left: 0;
    }
  } */
`

export default function Home() {
  return (
    <div className="animation-disaper">
      <Tag tagName="Home">
        <HomeSectionContainer>
          <HomeTextContainer>
            <p className="secondary-font animation-disaper bubble">Hi 👋</p>
            <div className="animation-disaper">
              <Tag tagName="h1" margin>
                <div className="animation-disaper">
                  <h1 className="secondary-font-color">
                    I&apos;m Lautaro Fernandez
                  </h1>
                  {/* <h2>{`// A Web App Developer`}</h2> */}
                </div>
              </Tag>
            </div>
            <div className="animation-disaper">
              <Tag tagName="p" margin>
                <div className="animation-disaper">
                  <p>{`Full-stack Developer`}</p>
                </div>
              </Tag>
            </div>
            <div className="animation-disaper">
              <Tag tagName="Technologies" margin>
                <Technologies className="animation-disaper">
                  <Image
                    src="/assets/js.svg"
                    height={50}
                    width={50}
                    // fill
                    alt={"javascript"}
                  />
                  <Image
                    src="/assets/ts.svg"
                    height={50}
                    width={50}
                    // fill
                    alt={"typescript"}
                  />

                  <Image
                    src="/assets/html.svg"
                    height={50}
                    width={50}
                    alt={"html"}
                  />
                  <Image
                    src="/assets/css.svg"
                    height={50}
                    width={50}
                    alt={"css"}
                  />
                  <Image
                    src="/assets/next.svg"
                    height={45}
                    width={45}
                    alt={"next"}
                  />
                  <Image
                    src="/assets/react.svg"
                    height={50}
                    width={50}
                    alt={"react"}
                  />
                  <Image
                    src="/assets/angularr.svg"
                    height={50}
                    width={50}
                    alt={"angular"}
                  />
                  <Image
                    src="/assets/mysql.svg"
                    height={50}
                    width={50}
                    alt={"mysql"}
                  />
                  <Image
                    src="/assets/c.svg"
                    height={40}
                    width={40}
                    alt={"c#"}
                  />
                  <Image
                    src="/assets/git.svg"
                    height={40}
                    width={40}
                    alt={"git"}
                  />
                  <Image
                    src={"/assets/styled-components.svg"}
                    height={60}
                    width={80}
                    alt={"styled-components"}
                  />
                </Technologies>
              </Tag>
            </div>
          </HomeTextContainer>
        </HomeSectionContainer>
      </Tag>
    </div>
  )
}
