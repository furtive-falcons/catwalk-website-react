import styled from 'styled-components';

const ImageContainer = styled.div`
  .default-thumbnail{
    align-items: center;
    object-fit: cover;
    // border: 2px solid black;
    width: 226px;
    height: 226px;
  }
  .fav-icon{
    position: absolute;
    // top: 0;
    // right: 0;
    margin: 10px;
    padding: 4px;
    color: #fff;
    font-size: 15px;
    background-color: transparent;
    border: 1px solid #3BBF4F;
    cursor: pointer;
    z-index: 1;
  }
  .fav-icon:hover{
    color: #3BBF4F;
    // background-color: #000;
    // border: #000;
    border: none;
  }
`;
export default ImageContainer;

// width: 280px;
// height: 360px;
// width: 230px;
// height: 330px;
