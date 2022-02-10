import { Button, Item, Container } from "../components/BagComponents/index";
import Header from "../components/HomeComponents/Header/index";
import api from '../service/api';

export default function BagPage() {
    return (
        <Container>
            <Header></Header>
            <Item>teste</Item>
            <Button>Finalizar compra</Button>
        </Container>
    );
}