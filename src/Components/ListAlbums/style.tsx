import styled from "styled-components";

interface IListAlbumsProps {
  visibility: boolean;
}

export const ListAlbums = styled.div`
  height: 400px;
  margin: 50px 0 100px 0;
  overflow-y: scroll;
`;

export const Content = styled.div`
  h2 {
    font-size: 20px;
    font-weight: 400;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #e6e6e6c8;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    

      span {
        opacity: 0.4;
        display: flex;
        padding: 10px;
        margin: 0px 50px 0px 20px;
        font-size: 20px;
      }
    }

    span {
      color: #f19393;
      cursor: pointer;
      :hover {
        color: #ff0000;
      }
    }
  }
`;

export const InfoContent = styled.div`
  display: flex;
  justify-content: space-between;

  .remove {
    color: #f29999;
    cursor: pointer;
 
    font-size: 15px;
 
    :hover {
      color: #ff0000;
    }
  }
    span {
      display: inline-block;
      padding:10px;
      
      text-align: left;
    
      
    }
  }
`;
