import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledHeading = styled.div`
  font-size: ${({ level }) => 4 / level}em; // <- dynamic font size
  font-weight: 300;
  margin: 0;

  ${({ typeStyle }) => {
    switch (typeStyle) {
      case 'SMALL':
        return css`
          font-size: 28px;
        `;
      case 'BIG':
        return css`
          font-size: 40px;
        `;
      default:
        return null;
    }
  }}
`;

const Header = ({ level = 1, typeStyle = 'SMALL', children }) => (
  <StyledHeading as={`h${level}`} level={level} typeStyle={typeStyle}>
    {children}
  </StyledHeading>
);

Header.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  typeStyle: PropTypes.oneOf(['SMALL', 'BIG']).isRequired,
  children: PropTypes.node.isRequired,
};
export default Header;
