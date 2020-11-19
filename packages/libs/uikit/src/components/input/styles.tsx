import styled from "styled-components";

export const Input = styled.input`
  background: #f2f2f2;
  border-radius: 1rem;
  padding: 1rem;
  width: 100%;
  border: 0.2rem solid #f2f2f2;
  color: #666360;

  flex: 1;
  border: 0;
  &::placeholder {
    color: #9b9b9b;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;

  input + div {
    margin-top: 0.8rem;
  }
`;

export const Error = styled.div``;
