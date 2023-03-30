import Tag from "components/tag"
import HomeComponent from "components/sections/homeComponent"

export default function Home() {
  return (
    <div className="animation-disaper">
      <Tag tagName="Home">
        <HomeComponent />
      </Tag>
    </div>
  )
}
