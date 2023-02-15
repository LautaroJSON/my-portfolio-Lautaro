import { TagChildren, TagContainer, TagStyle } from "./styles"

interface Itag {
  children: JSX.Element
  tagName: string
  margin?: boolean
}

const Tag = ({ children, tagName, margin }: Itag) => {
  return (
    <TagContainer>
      <TagStyle>{`<${tagName}>`}</TagStyle>
      <TagChildren lastChild={margin}>{children}</TagChildren>
      <TagStyle>{`</${tagName}>`}</TagStyle>
    </TagContainer>
  )
}

export default Tag
