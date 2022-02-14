import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bag, Container, SearchBox, User } from "./style/index";
import Logo from "../../Logo"

export default function Header() {
    const [userName, setUserName] = useState();
    const navigate = useNavigate()

    return (
        <Container>
            <span>
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
                    <ion-icon name="cart-outline" onClick={() => navigate("/bag")}></ion-icon>
                </Bag>
            </span>

            <Logo />

            {/* <SearchBox>
                <input type='text' placeholder='Busca' onChange={(e) => handleChange(e)}></input>
                <ion-icon name="search-outline" onClick={handleSubmit}></ion-icon>
            </SearchBox> */}
        </Container>
    )
}
