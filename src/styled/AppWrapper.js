import styled from "styled-components";
import { smoothBackground } from "./stylesCollection";

const Wrapper = styled.div`
  min-width: 100%;
  min-height: 100vh;
  ${smoothBackground};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Wrapper;
