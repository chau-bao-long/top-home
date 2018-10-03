// @flow
import styled, { keyframes } from 'styled-components';
import React from 'react';

const horizontalScale = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const BarContainer = styled.div`
  background: ${props => props.theme.color.greyLight};
  width: 100%;
  height: 3.5px;
  position: fixed;
  top: 0;
  z-index: 99;
`;

const Bar = styled.div`
  background: ${props => props.theme.color.blueChill};
  height: 3.5px;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  animation: ${horizontalScale} 2s ease;
  transition: width 2s ease 0s;
  z-index: 99;
`;

export default function LoadingBar() {
  return (
    <BarContainer>
      <Bar />
    </BarContainer>
  );
}
