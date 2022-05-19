import styled from "styled-components";

export const Footer = styled.footer`
  position: absolute;
  bottom: 20px;

  display: flex;
  align-items: center;

  div {
    margin: 10px;
  }

  button {
    padding: 10px;
    display: flex;
    outline: none;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
    border: none;
    color: var(--main-blue);
    border-radius: 100%;

    :active {
      transition: ease all 0.2s;
      transform: translateY(4px);
      box-shadow: 3px 2px 4px rgba(0, 0, 0, 0.4);
    }
  }
`;
