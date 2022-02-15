import { Button, ItemBook, Container, AllItems } from "../components/BagComponents/index";
import Header from "../components/Header/index";
import { useContext } from "react/cjs/react.development";
import AuthContext from "../contexts/AuthContext";
import { StyledLink } from "../components/FormComponents";
import { useNavigate } from "react-router-dom";

export default function BagPage() {
  const { bag } = useContext(AuthContext)
  const navigate = useNavigate()

  return (
    <>
      <Header />
      <Container>
        <AllItems>
          {bag.items.map((item) =>
            <ItemBook>
              <img src={item.coverUrl} alt={item.title} />
              <p className="title">{item.title}</p>
              <p>{item.price}</p>
            </ItemBook>)}
          <span>Total: {bag.total}</span>
        </AllItems>
        <Button onClick={() => navigate("/checkout")}>Finalizar compra</Button>
        <StyledLink to="/livros">Continuar comprando</StyledLink>
      </Container>
    </>
  )
}