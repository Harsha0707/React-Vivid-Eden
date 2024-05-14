import styled from "styled-components";

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: flex-end;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export default ButtonGroup;
