import styled from "styled-components";

const Container = styled.div`
  width: 100vw;

  background-color: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px;

  h1, ion-icon{
    font-size: 30px;
  }
`;

const SearchBox = styled.div`
  width: 40vw;
  
  font-size: 14px;

  border: 2px solid lightgray;
  border-radius: 5px;
  padding: 5px;
`;

const Cart = styled.div`
  position: relative;

  cursor: pointer;

  .counter{
    background-color: lightcoral;
    width: 15px;
    height: 15px;

    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: -8px;
    right: 0;

    font-size: 12px;
  }
`

export {
  Container, SearchBox, Cart
}