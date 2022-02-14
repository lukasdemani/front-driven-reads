import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Swal from "sweetalert2"
import { Button, StyledLink } from "../components/FormComponents"
import Loader from "../components/Loader"
import AuthContext from "../contexts/AuthContext"
import api from "../services/api"

function CheckoutPage() {
  const [bagInfo, setBagInfo] = useState([])
  const [loading, setLoading] = useState(true)
  const { bag, total } = bagInfo
  const { auth } = useContext(AuthContext)
  const navigate = useNavigate()

  function getBag() {
    const promise = api.getBag(auth.token)

    promise.then(response => {
      console.log(response.data)
      setBagInfo(response.data.bagInfo)
      setLoading(false)
    })
  }

  console.log(bag)
  useEffect(() => getBag(), [])

  function handleClick() {
    Swal.fire({ icon: 'success', text: "Pedido finalizado com sucesso!" })

    function handleClick() {
      Swal.fire({ icon: 'success', text: "Pedido finalizado com sucesso!" })
  
      const promise = api.addOrder(bag, auth.token)
  
      promise.then(() => console.log("deu bom"))
  
      navigate("/")
    }

    navigate("/")
  }

  return (
    <Container>
      <h1>Finalizar Pedido</h1>
      {loading ?
        <Loader />
        :
        <>
          <BookList>
            {bag.map(book => (
              <Book key={book._id}>
                <div>
                  <p>{book.title}</p>
                  <p>{book.author}</p>
                </div>
                <p>1 x {book.price}</p>
              </Book>
            ))}
          </BookList>
          <h2>TOTAL: {total}</h2>
        </>
      }
      <Button onClick={handleClick}>Finalizar Pedido</Button>
      <StyledLink to="/livros">Voltar</StyledLink>
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