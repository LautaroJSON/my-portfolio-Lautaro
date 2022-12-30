import {
  HomePetContainer,
  HomeSectionContainer,
  HomeTextContainer,
} from "./styles"

import Tag from "../../components/tag"

const Home = () => {
  return (
    <HomeSectionContainer>
      <HomeTextContainer>
        {/* <p className="secondary-font animation-disaper bubble">
          Hi, my name is
        </p> */}
        <div className="animation-disaper">
          <Tag tagName="h1">
            <div>
              <h1 className="secondary-font-color">Lautaro Fernandez</h1>
              <h2>{`// A Web App Developer`}</h2>
            </div>
          </Tag>
        </div>
        {/* information */}
        <div className="animation-disaper">
          <Tag tagName="p">
            <div>
              <p className="secondary-font">{`I'm a full-stack Developer, inclined to the front end with React / Nextjs.`}</p>
            </div>
          </Tag>
          <Tag tagName="p">
            <div>
              <p className="secondary-font">{`with a 360 knowledge in web development,
               such as database structure, development and back-end operations with REST API structures.`}</p>
            </div>
          </Tag>
        </div>
      </HomeTextContainer>
      {/* <HomePetContainer>
        <Tag tagName="pet">
          <div className="indent">{ <PetThreeJs /> }</div>
        </Tag>
      </HomePetContainer> */}
    </HomeSectionContainer>
  )
}

export default Home
