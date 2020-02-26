import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ color }) => color || '#e6e6e6'};
  width: 105px;
  height: 30px;
  border: none;
  border-radius: 50px;
  font-weight: 500;
  font-size: 10px;
  text-transform: uppercase;
  cursor: pointer;

  ${({ secondary }) =>
    !secondary &&
    css`
      background-color: #ffd82d;
      width: 220px;
      height: 47px;
      font-size: 16px;
    `}
`;

export default Button;
