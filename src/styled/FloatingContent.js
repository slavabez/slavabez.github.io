import styled from "styled-components";

const FloatingContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.text};
  fill: ${props => props.theme.text};
`;

export default FloatingContent;
