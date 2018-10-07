import styled from 'styled-components';

export default styled.input.attrs({
  type: 'text',
  placeholder: 'Enter you name',
})`
  width: 100%;
  min-height: 36px;
  border-bottom: 1px solid rgba(0,0,0,.09);
  color: green;
  background: rbga(0, 0, 0, 0);
  border: none;
  outline: none;
  padding: 5px;
`;
