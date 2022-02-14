import { Button, ItemBook, Container, AllItems } from "../components/BagComponents/index";
import Header from "../components/HomeComponents/Header/index";
import { useState, useEffect } from "react";
import api from '../services/api';

export default function BagPage() {
    const [bag, setBag] = useState([]);
    const [total, setTotal] = useState();
    

    useEffect(() => {
        const promise = api.getBag(bag);

        promise.then((response) => {
            setBag(response.data);
            console.log(bag[0]);
        });

        promise.catch((error) => {
            console.log(error);
        });
    
      }, []);

    return (
        <Container>
            <Header></Header>
            <AllItems>
                {bag.map((item) => 
                <ItemBook>
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                </ItemBook>)}
                <span>Total: {total}</span>
            </AllItems>
            <Button>Finalizar compra</Button>
        </Container>
    )
}