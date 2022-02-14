import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import api from "../../services/api";
import { SearchBox, Container, Cart } from "../Header/style";

export default function Header() {
  const [bag, setBag] = useState('')
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [bookSearched, setBookSearched] = ([]);

  useEffect(() => getBag(), [])

  function getBag() {
    const promise = api.getBag(auth.token)

    promise.then(response => setBag(response.data.bagInfo.bag))
  }

  function handleSubmit(e){
    e.preventDefault()

    navigate(`/busca/${search}`);
}

  return (
    <Container>
      <h1>Olá, {auth.name}</h1>

      <SearchBox onSubmit={handleSubmit}>
        <input 
          type='text' 
          placeholder='Busca' 
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          ></input>
        <button type="submit"> 
          <ion-icon name="search-outline"></ion-icon>
        </button>
      </SearchBox>

      <Cart onClick={() => navigate("/checkout")}>
        <ion-icon name="cart-outline"></ion-icon>
        {bag.length !== 0 && <div className="counter">{bag.length}</div>}
      </Cart>
    </Container>
  )
}
