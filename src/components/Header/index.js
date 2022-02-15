import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import api from "../../services/api";
import { SearchBox, Container, Cart } from "../Header/style";

export default function Header() {
  const { auth, bag, setBag } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => getBag(), [])

  function getBag() {
    const promise = api.getBag(auth.token)
    promise.then(response => setBag(response.data))
  }

  return (
    <Container>
      <h1>Olá, {auth.name}</h1>

      <SearchBox >
        Busca
        <ion-icon name="search-outline"></ion-icon>
      </SearchBox>

      <Cart onClick={() => navigate("/carrinho")}>
        <ion-icon name="cart-outline"></ion-icon>
        {bag.length === 0 ? "" : <div className="counter">{bag.items.length}</div>}
      </Cart>
    </Container>
  )
}
