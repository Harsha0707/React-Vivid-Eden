import styled from "styled-components";

const Tag = styled.span`
  width: fit-content;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  border-radius: 100px;

  color: var(--color-${(props) => props.type}-700);
  background-color: var(--color-${(props) => props.type}-100);

  @media only screen and (max-width: 767px) {
    font-size: 1rem;

    text-align: center;
  }

  @media only screen and (max-width: 1024px) {
    min-width: 100px;
  }
`;

export default Tag;
