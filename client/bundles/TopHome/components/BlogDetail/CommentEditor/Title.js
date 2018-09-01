import styled from "styled-components"
import Contenteditable from "../../Common/Contenteditable"

export default styled(Contenteditable).attrs({
  placeHolder: "Enter you name",
})`
  width: 100%;
  min-height: 36px;
  border-bottom: 1px solid rgba(0,0,0,.09);
  color: green;
`
