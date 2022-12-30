import { TagChildren, TagStyle } from "./styles"

interface Itag {
  children: JSX.Element
  tagName: string
}

const Tag = ({ children, tagName }: Itag) => {
  return (
    <div>
      <TagStyle>{`<${tagName}>`}</TagStyle>
      <TagChildren>{children}</TagChildren>
      <TagStyle>{`</${tagName}>`}</TagStyle>
    </div>
  )
}

export default Tag
