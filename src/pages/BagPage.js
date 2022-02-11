import { Button, ItemBook, Container } from "../components/BagComponents/index";
import Header from "../components/HomeComponents/Header/index";
import { useState, useEffect } from "react";

export default function BagPage() {
    const [bag, setBag] = useState([]);

    
    return (
        <Container>
            <Header></Header>
            <ItemBook>teste</ItemBook>
            <Button>Finalizar compra</Button>
        </Container>
    )
}