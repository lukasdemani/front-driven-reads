import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: #f7f9fa;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
`

const BookCover = styled.div`
  width: 200px;

  img{
    width: 100%;
  }
`

const BookInformations = styled.div`
  width: 80%;
  
  color: gray;
  text-align: center;
  
  display: flex;
  flex-direction: column;
  gap: 18px;

  
  .title, .price{
    font: bold 24px "Raleway";
    color: #f28e62;
  }
  
  .author{
    font: bold 24px "Raleway";
    color: gray;
  }
  
  .subtitle{
    font: normal 18px "Raleway";
  }
  `

const BookDescription = styled.div`
  font: normal 18px "Raleway";
 
  .ver-mais{
    color: black;
    font-style: bold;

    padding-top: 5px;
  }
`

const BookDetails = styled.div`
  width: 60%;

  border-radius: 5px;
  padding: 20px;

  background-color: #fff;
  
  font: normal 16px "Raleway";

  display: flex;  
  flex-direction: column;
  
  p{
    font: bold 22px "Raleway";
    color: #F5A988;
    padding-bottom: 20px;
  }
`

const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 45% 45%;
  justify-content: space-between;
  row-gap: 15px;
  
  font: 16px "Raleway";

  div{
    display: flex;
    flex-direction: column;
  }
  
  span{
    font-weight: bold;
    color: #F5A988;
  }
  
  .text{  
    font-weight: normal;
    color: gray;
  }
`

const AddToCartButton = styled.button`
  box-sizing: border-box;

  font: bold 20px "Raleway";
  color: gray;
  text-align: center;

  width: 60%;

  border: 2px solid #f28e62;
  border-radius: 25px;
  padding: 15px;

  cursor: pointer;
`

export {
  Container,
  BookCover,
  BookInformations,
  BookDescription,
  BookDetails,
  DetailsContainer,
  AddToCartButton
}