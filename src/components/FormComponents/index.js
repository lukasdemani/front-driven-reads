import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: #f7f9fa;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`

const Form = styled.form`
  width: 326px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`

const Input = styled.input`
  box-sizing: border-box;
  
  width: 90%;
  
  padding: 15px;
  border: 1px solid #f28e62;
  border-radius: 5px;

  font-size: 20px;

  cursor: ${props => props.disabled ? "not-allowed" : "text"};
  ${props => props.disabled && "pointer-events: none;"}

  background: ${props => props.disabled ? "#bababa" : "#fff"};
  
`

const Button = styled.button`
  box-sizing: border-box;

  width: 90%;
  height: 50px;

  border-radius: 5px;

  color: #fff;
  font-size: 22px;
  
  background-color: #f28e62;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
`

const StyledLink = styled(Link)`
  color: #f28e62;
  font-size: 22px;
  text-align: center;
  
  align-self: center;
`
export {
  Container,
  Form,
  Input,
  Button,
  StyledLink,
}