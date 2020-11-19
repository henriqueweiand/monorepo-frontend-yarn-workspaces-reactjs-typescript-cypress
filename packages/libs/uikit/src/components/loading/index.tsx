import React from "react";

import { Container } from "./styles";
import { LoadingProps } from "./types";

const Loading: React.FC<LoadingProps> = ({
  children = "Carregando",
  ...rest
}) => {
  return <Container {...rest}>{children}</Container>;
};

export default Loading;
