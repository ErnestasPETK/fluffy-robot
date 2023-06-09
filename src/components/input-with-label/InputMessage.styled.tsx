import styled from "styled-components";

const StyledMessage = styled.p`
  font-size: 0.8rem;
  margin: 0;
  padding: 0 0 0 0.5rem;
  display: flex;
  gap: 0.2rem;
`;

export const StyledMessageInfo = styled(StyledMessage)`
  color: blue;
`;
export const StyledMessageError = styled(StyledMessage)`
  color: red;
`;
