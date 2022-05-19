import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  font-size: 26px;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
  }
`;
