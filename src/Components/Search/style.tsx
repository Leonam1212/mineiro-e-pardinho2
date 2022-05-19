import styled from "styled-components";

export const Search = styled.div`
  display: flex;

  padding: 5px;
  margin-top: 50px;
  flex-direction: column;

  div {
   
    width: 100%;
    display: flex;
    justify-content: space-between;
  
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }
  input {
   
    max-width: 100%;
    outline: none;
    border: none;
    height: 50px;
    background: #f0e9e9a1;
    width: 100%;
    border-radius: 2px;
    border-radius: 8px;
    padding-left: 20px;
    margin: 10px 10px 0 0;
    :focus {
      border: 1px solid #3498db;
    }
  }
  button {
    width: 30%;
    background-color: #3498db;
    outline: none;
    border: none;
    height: 50px;
    border-radius: 50px;
    margin: 10px 10px 0 0;
    box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.2);
    color: #ecf0f1;

    :hover {
      color: #3498db;
      background: #ecf0f1;
    }
     
    @media (max-width: 768px) {
      width: 100%;
      margin-top: 15px;
    }
    
  }
`;