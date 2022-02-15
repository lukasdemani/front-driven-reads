import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Swal from "sweetalert2"
import { Button } from "../components/FormComponents"
import AuthContext from "../contexts/AuthContext"
import api from "../services/api"

function CheckoutPage() {
  const { auth, bag } = useContext(AuthContext)
  const navigate = useNavigate()

  function handleClick() {
    Swal.fire({ icon: 'success', text: "Pedido finalizado com sucesso!" })

    const promise = api.addOrder(bag, auth.token)

    promise.then(() => navigate("/"))
  }

  return (
    <Container>
      <h1>Finalizar Pedido</h1>
      <BookList>
        {bag.items.map(book => (
          <Book key={book._id}>
            <div>
              <p>{book.title}</p>
              <p>{book.author}</p>
            </div>
            <p>{book.price}</p>
          </Book>
        ))}
      </BookList>
      <h2>TOTAL: {bag.total}</h2>
      <Button onClick={handleClick}>Realizar Pedido</Button>
    </Container>
  )
}

export default CheckoutPage

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: #f7f9fa;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  h1{
    font: bold 24px "Raleway";
    margin-top: 30px;
  }
  
  h2{
    font: bold 20px "Raleway";
  }
`

const BookList = styled.div`
  width: 80%;
  height: 300px;

  overflow-y: scroll;

  background-color: #fff;

  display: flex;
  flex-direction: column;
  gap: 15px;
`

const Book = styled.div`
  width: 100%;

  padding: 15px 7px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`