import React from 'react';
import styled from 'styled-components';
import GlobalStyle from 'theme/GlobalStyles';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Root = () => (
  <>
    <GlobalStyle />
    <Title>Wszystko gra</Title>
  </>
);

export default Root;
