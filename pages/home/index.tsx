import { HomeSectionContainer, HomeTextContainer, Technologies } from "./styles"

import Tag from "components/tag"
import Image from "next/image"

const Home = () => {
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
                  <p>{`I'm a full-stack Developer`}</p>
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

export default Home
