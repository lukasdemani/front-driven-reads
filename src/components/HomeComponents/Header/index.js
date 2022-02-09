import { useState } from "react";
import { Bag, Container, LogoText, SearchBox, User } from "./style/index";

export default function Header(){
    const [userName, setUserName] = useState();

    return (
        <Container>
            <div>
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
            </div>

            <LogoText>
                Driven Reads
            </LogoText>

            <SearchBox>
                <input type='text' placeholder='Busca'></input>
            </SearchBox>
        </Container>
    )
}
