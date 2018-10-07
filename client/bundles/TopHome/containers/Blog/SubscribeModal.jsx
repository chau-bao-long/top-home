// @flow
import React from 'react';
import { connect } from 'react-redux';
import Modal from '../../components/Blog/SubscribeModal';
import { subscribe } from '../../actions/socialAction';

type Props = {
  isLoading: boolean,
  errorMsg: string,
  subscribe: (email: string) => void,
}

type State = {
  email: string,
}

class SubscribeModal extends React.PureComponent<Props, State> {
  state = {
    email: '',
  }

  componentDidUpdate(prevProps: Props) {
    const { isLoading, errorMsg } = this.props;
    if (prevProps.isLoading && !isLoading && errorMsg.length === 0) {
      // $FlowFixMe
      document.querySelector('#subscribeModalId').click();
      this.setState({ email: '' });
    }
  }

  render() {
    const { isLoading, errorMsg, subscribe } = this.props;
    const { email } = this.state;

    return (
      <Modal
        loading={isLoading}
        error={errorMsg}
        onSubmit={() => subscribe(email)}
        onMailChange={(newEmail) => { this.setState({ email: newEmail }); }}
        email={email}
      />
    );
  }
}

export default connect(state => state.social, { subscribe })(SubscribeModal);
