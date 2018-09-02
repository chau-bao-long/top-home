import styled from "styled-components"

export default styled.button.attrs({
  className: 'btn btn-outline-secondary',
})`
`

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 220px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const ButtonLoading = styled.div`
  border: 4px solid ${props => props.theme.color.grey};
  border-top: 4px solid ${props => props.theme.color.red};
  border-radius: 50%;
  width: 25px;
  height: 25px;
  margin: 10px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

`
