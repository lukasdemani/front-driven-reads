import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bag, Container, SearchBox, User } from "./style/index";
import Logo from "../../Logo"

export default function Header() {
    const [userName, setUserName] = useState();
    const navigate = useNavigate()

    return (
        <Container>
            <div>
                <User>
                    {userName ?
                        <>Olá, {userName}</>
                        :
                        <div onClick={() => navigate("/login")}>
                            <ion-icon name="log-in-outline"></ion-icon>
                            <p>Entre ou cadastre-se</p>
                        </div>
                    }
                </User>

                <Bag>
                    <ion-icon name="cart-outline"></ion-icon>
                </Bag>
            </div>

            <Logo />

            <SearchBox>
                <input type='text' placeholder='Busca'></input>
            </SearchBox>
        </Container>
    )
}
