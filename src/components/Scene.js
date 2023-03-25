import { Paragraph } from "./StyledParagraph"

function Scene({status, text}) {
  return (
    <Paragraph active={status}>{text}</Paragraph>
  )
}

export default Scene