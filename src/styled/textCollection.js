import styled from "styled-components";

export const Header = styled.h1`
  font-family: "Lato", sans-serif;
`;

export const Bio = styled.h3`
  text-align: center;
  max-width: 90%;

  @media(min-width: 768px){
    max-width: 45%;
  }

  @media(min-width: 1024px){
    max-width: 30%;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const LogoLink = styled.a`

  margin: 0.5rem;
  svg {
    height: 50px;
    width: 50px;
  }

`;
