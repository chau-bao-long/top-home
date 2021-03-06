// @flow
import React from 'react';
import styled from 'styled-components';
import Modal from '../Common/Modal';
import SubscribeImg from '../../images/subscribeimg.png';
import SpinnerLoading from '../Common/SpinnerLoading';

const LetterImage = styled.img.attrs({
  src: SubscribeImg,
})`
  width: 120px;
  position: relative;
  top: -60px;
`;

const Title = styled.h4`
  letter-spacing: 5px;
`;

const EmailField = styled.input.attrs({
  type: 'email',
  placeholder: 'your-email@mail.com',
})`
  border: none;
  border-radius: 10px;
  width: 50%;
  margin: 20px 0;
  background: ${props => props.theme.color.porcelain};
  padding: 8px 16px;
`;

const SubscribeButton = styled.button`
  width: 100%;
  height: 54px;
  border-radius: 0px 0px 5px 5px;
  border: none;
  margin-top: 20px;
  padding: 5px;
  background: ${props => props.theme.color.cinnabar};
  color: white;
  letter-spacing: 8px;
  display: flex;
  justify-content: center;

  &:hover {
    opacity: 0.75; 
  }

  &:focus {
    outline: none; 
  }

  &:active { 
    background: black;
    opacity: 0.75; 
  }
`;

const Error = styled.div`
  color: red;
`;

type Props = {
  loading: boolean,
  error: string,
  onSubmit: () => void,
  onMailChange: (email: string) => void,
  email: string,
}

export default class SubscribeModal extends React.PureComponent<Props> {
  render() {
    const {
      loading, onSubmit, onMailChange, error, email,
    } = this.props;

    return (
      <Modal id="subscribeModalId">
        <LetterImage />
        <Title>Stay In Touch With Me!</Title>
        <Error>{error}</Error>
        <EmailField
          onChange={(e) => { onMailChange(e.target.value); }}
          value={email}
        />
        <SubscribeButton id="test" onClick={() => onSubmit()} disabled={loading}>
          { loading ? <SpinnerLoading /> : 'SUBSCRIBE' }
        </SubscribeButton>
      </Modal>
    );
  }
}
