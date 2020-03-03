import React from 'react';
import styled from 'styled-components';
import penIcon from './assets/pen.png';
import bulbIcon from './assets/bulb.png';
import logoutIcon from './assets/logout.png';
import twitterIcon from './assets/twitter.png';
import ButtonIcon from './ButtonIcon';

export default {
  title: 'ButtonIcon',
  decorators: [storyFn => <YellowBackground>{storyFn()}</YellowBackground>],
};

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: ${({ theme }) => theme.notes};
`;

export const ButtonPen = () => <ButtonIcon icon={penIcon} />;
export const ButtonLogout = () => <ButtonIcon icon={logoutIcon} />;
export const ButtonBulb = () => <ButtonIcon icon={bulbIcon} />;
export const ButtonTwitter = () => <ButtonIcon icon={twitterIcon} />;
