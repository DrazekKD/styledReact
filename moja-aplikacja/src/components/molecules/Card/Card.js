import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Header from '../../atoms/Header/Header';
import Button from '../../atoms/Button/Button';

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ cardType, theme }) => (cardType ? theme[cardType] : 'white')};

  :first-of-type {
    z-index: 999;
  }
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

const StyledHeading = styled(Header)`
  margin: 5px 0 0;
`;

const StyledAvatar = styled.img`
  width: 87px;
  height: 87px;
  border-radius: 50%;
  border: 5px solid ${({ theme }) => theme.twitters};
  position: absolute;
  top: 25px;
  right: 25px;
`;

const StyledLinkButton = styled.a`
  display: block;
  position: absolute;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background-size: 60%;
  background: white url(${({ img }) => img}) no-repeat 50%;
  top: 50%;
  right: 25px;
  transform: translateY(-50%);
`;

const Card = ({ cardType }) => (
  <StyledWrapper>
    <InnerWrapper cardType={cardType}>
      <StyledHeading level={2} typeStyle="BIG">
        Hello Ja
      </StyledHeading>
      <DateInfo>3 day</DateInfo>
      {cardType === 'twitters' && <StyledAvatar src="https://avatars.io/twitter/Apple" />}
      {cardType === 'articles' && <StyledLinkButton />}
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum illo ipsa ipsam itaque
        natus quaerat reprehenderit tempore, temporibus ullam voluptas?
      </Paragraph>
      <Button secondary>REMOVE</Button>
    </InnerWrapper>
  </StyledWrapper>
);

Card.propTypes = {
  cardType: PropTypes.oneOf(['notes', 'twitters', 'articles']).isRequired,
};

export default Card;
