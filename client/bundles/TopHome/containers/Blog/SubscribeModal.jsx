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

class SubscribeModal extends React.PureComponent<Props> {
  defaultProps = {
    isLoading: false,
    errorMsg: '',
  }

  componentDidUpdate(prevProps: Props) {
    const { isLoading, errorMsg } = this.props;
    if (prevProps.isLoading && !isLoading && errorMsg.length === 0) {
      // TODO: hide modal
    }
  }

  render() {
    const { isLoading, errorMsg, subscribe } = this.props;
    return (
      <Modal
        loading={isLoading}
        error={errorMsg}
        onSubscribe={email => subscribe(email)}
      />
    );
  }
}

export default connect(state => state.error, { subscribe })(SubscribeModal);
