import { useState } from "react";
import { Bag, Container, LogoText, SearchBox, User, StyledLink } from "./style/index";
import api from '../../../service/api'

export default function Header(){
    const [userName, setUserName] = useState();
    const [search, setSearch] = useState();
    const [booksSearch, setBooksSearch] = useState([]);

    function handleChange(e) {
        setSearch(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log(search)
        const promise = api.searchBook({ search });
        
        promise.then((promise) => {
            setBooksSearch(promise.data);
            console.log(promise.data);
        });
        promise.catch(() => {
            alert('Erro, tente novamente');
        });
    }

    return (
        <Container>
            <span>
                <User>
                    {userName ?
                        <>Olá, {userName}</>
                    :
                        <>
                            <ion-icon name="log-in-outline"></ion-icon>
                            <p>Entre ou cadastre-se</p>
                        </>
                    }
                </User>
                
                <Bag>
                    <ion-icon name="cart-outline"></ion-icon>
                </Bag>
            </span>

            <LogoText>
                <h1>Driven Reads</h1>
            </LogoText>

            <SearchBox>
                <input type='text' placeholder='Busca' onChange={(e) => handleChange(e)}></input>
                <ion-icon name="search-outline" onClick={handleSubmit}></ion-icon>
            </SearchBox>
        </Container>
    )
}
