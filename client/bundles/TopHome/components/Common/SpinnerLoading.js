import styled from 'styled-components';

export default styled.div`
  border: 4px solid ${props => props.theme.color.greyLight};
  border-top: 4px solid ${props => props.theme.color.red};
  border-radius: 50%;
  width: 25px;
  height: 25px;
  margin: 10px;
  animation: spin 800ms linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
