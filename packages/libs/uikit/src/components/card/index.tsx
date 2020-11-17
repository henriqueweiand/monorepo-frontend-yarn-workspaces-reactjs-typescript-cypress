import React from "react";
import { Container } from "./styles";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default React.memo(Card);
