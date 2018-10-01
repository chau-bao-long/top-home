import styled from 'styled-components';
import { breakpoint } from '../../../vars/helper';

export default styled.div.attrs({
  className: 'row rounded',
})`
  border: 1px solid rgba(0,0,0,.1)!important;
  margin: 15px 0px;
  height: 500px;
  display: flex;
  background: white;

  ${breakpoint.xs`
  flex-direction: row;
  justify-content: flex-start;
  `}

  ${breakpoint.md`
  height: 360px;
  `}

  &:hover {
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    transition: box-shadow 0.3s ease-in-out;
  }
`;
