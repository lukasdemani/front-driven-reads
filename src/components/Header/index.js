import { useContext, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import AuthContext from "../../contexts/AuthContext";
import api from "../../services/api";
import { SearchBox, Container, Cart } from "../Header/style";

export default function Header() {
  const [bag, setBag] = useState('')
  const { auth } = useContext(AuthContext)

  useEffect(() => getBag(), [])

  function getBag() {
    const promise = api.getBag(auth.token)

    promise.then(response => setBag(response.data.bag))
  }

  return (
    <Container>
      <h1>Olá, {auth.name}</h1>

      <SearchBox>
        <input type='text' placeholder='Busca'></input>
      </SearchBox>

      <Cart>
        <ion-icon name="cart-outline"></ion-icon>
        {bag.length !== 0 && <div className="counter">{bag.length}</div>}
      </Cart>
    </Container>
  )
}
