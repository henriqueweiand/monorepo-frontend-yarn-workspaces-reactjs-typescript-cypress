import React from 'react';
import { Container } from './styles';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default React.memo(Button);
