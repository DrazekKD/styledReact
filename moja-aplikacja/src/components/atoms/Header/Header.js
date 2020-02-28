import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeading = styled.div`
  font-size: ${({ level }) => 4 / level}em; // <- dynamic font size
  font-weight: 300;
  margin: 0;
`;

const Header = ({ level = 1, children }) => (
  <StyledHeading as={`h${level}`} level={level}>
    {children}
  </StyledHeading>
);

Header.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node.isRequired,
};
export default Header;
