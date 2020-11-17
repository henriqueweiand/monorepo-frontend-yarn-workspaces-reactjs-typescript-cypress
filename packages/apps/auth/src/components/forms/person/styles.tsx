import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;

  > div + div {
    margin-top: 0.8rem;
  }
`;
