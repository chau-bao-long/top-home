import styled from "styled-components"
import Contenteditable from "../../Common/Contenteditable"

export default styled(Contenteditable).attrs({
  placeHolder: "Enter your comments ",
})`
  width: 100%;
  height: 150px;
  margin-top: 20px;
  overflow: hidden;
`
