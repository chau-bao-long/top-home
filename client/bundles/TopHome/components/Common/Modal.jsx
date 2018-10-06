// @flow
import React from 'react';
import styled from 'styled-components';

const Container = styled.div.attrs({
  className: "modal fade",
  tabIndex: "-1",
  role: "dialog",
  "aria-labelledby": "modalLabel",
  "aria-hidden": "true",
})``;

const Dialog = styled.div.attrs({
  className: "modal-dialog modal-dialog-centered",
  role: "document",
})``;

const Content = styled.div.attrs({
  className: "modal-content",
})`
  align-items: center;
`;

export default function Modal({ children, id }) {
  return (
    <Container id={id}>
      <Dialog>
        <Content>
          { children }
        </Content>
      </Dialog>
    </Container>
  );
}
