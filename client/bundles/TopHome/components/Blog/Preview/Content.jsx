import { breakpoint } from "../../../vars/helper"
import styled from "styled-components"

export default styled.span`
  padding: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  ${breakpoint.xs`
  height: 75%;
  `}
`
