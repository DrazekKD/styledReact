import React from 'react';
import GlobalStyle from 'theme/GlobalStyles';
import Button from 'components/Button/Button';

const Root = () => (
  <>
    <GlobalStyle />
    <Button>Close / Save</Button>
    <Button secondary>Close / Save</Button>
  </>
);

export default Root;
