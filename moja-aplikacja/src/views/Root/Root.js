import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from '../../components/atoms/Header/Header';
import GlobalStyle from '../../theme/GlobalStyles';
import { theme } from '../../theme/mainTheme';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <Header level={1} typeStyle="SMALL">
          TEST1
        </Header>
        <Header level={4} typeStyle="BIG">
          TEST2
        </Header>
      </>
    </ThemeProvider>
  </div>
);

export default Root;
