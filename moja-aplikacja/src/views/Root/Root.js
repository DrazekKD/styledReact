import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../theme/GlobalStyles';
import Button from '../../components/atoms/Button/Button';
import { theme } from '../../theme/mainTheme';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <Button>Close / Save</Button>
        <Button secondary>Close / Save</Button>
      </>
    </ThemeProvider>
  </div>
);

export default Root;
