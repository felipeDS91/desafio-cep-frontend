import React from 'react';

import { Wrapper, Body } from './styles';

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Body>{children}</Body>
    </Wrapper>
  );
};

export default DefaultLayout;
