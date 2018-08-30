import { breakpoint } from "../../../utils/styleUtils"
import styled from "styled-components"

export const ThumbnailContainer = styled.span.attrs({
  className: "col-md-4 col-xs-12"
})`
  padding: 0;

  ${breakpoint.xs`
  height: 25%;
  `}
`

export const Thumbnail = styled.img`
  height: 100%;
  width: 100%;
  display: inline-block;
  object-fit: cover;
`
