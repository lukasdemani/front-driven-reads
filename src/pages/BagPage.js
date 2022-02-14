import { Button, ItemBook, Container, AllItems } from "../components/BagComponents/index";
import Header from "../components/HomeComponents/Header/index";
import { useState, useEffect } from "react";
import api from '../services/api';

export default function BagPage() {
    const [bag, setBag] = useState([]);
    const [total, setTotal] = useState();
    // let bag = [
    //     {
    //         author: "Arthur Conan Doyle",
    //         title: "Sherlock Holmes",
    //         subtitle: "",
    //         description: "Em 1887, o escritor escocês sir Arthur Conan Doyle criou Sherlock Holmes, o infalível detetive a quem os agentes da Scotland Yard recorriam para solucionar os mistérios mais intrigantes da Inglaterra vitoriana. Desde então, as aventuras do mestre da investigação atraem leitores ávidos por chegar à última página e ver o enigma desvendado. Esta obra completa reúne os quatro romances e os 56 contos sobre as aventuras do detetive mais famoso do mundo e de seu fiel companheiro, o dr. Watson. Para desvendar mistérios, o faro e a astúcia de Sherlock Holmes levam às fontes menos óbvias, às informações mais precisas. Um modelo que influencia até hoje a literatura policial e revela fôlego para impressionar gerações de leitores através dos tempos",
    //         coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51NjUyqABrL._SX446_BO1,204,203,200_.jpg",
    //         price: "73,90",
    //         pages: "1808",
    //         publisher: "HarperCollins",
    //         ISBN: "9788595080836",
    //         category: "Coleções"
    //       },
    //       {
    //         author: "Rick Riordan",
    //         title: "Percy Jackson e os Olimpianos",
    //         subtitle: "",
    //         description: "Combinando mitologia grega e muita aventura, a saga do menino Percy Jackson, que aos 12 anos descobre que é um semideus, filho de Poseidon, tornou-se um fenômeno mundial. Foram mais de 15 milhões de livros vendidos em todo o mundo e quase um milhão no Brasil, além da adaptação para o cinema que atraiu 1,8 milhão de espectadores no país.",
    //         coverUrl: "https://livrariaflorence.fbitsstatic.net/img/p/livro-box-percy-jackson-e-os-olimpianos-riordan-intrinseca-216323/402674.jpg?w=660&h=660&v=no-change&qs=ignore",
    //         price: "133,90",
    //         pages: "1816",
    //         publisher: "Intrínseca",
    //         ISBN: "9788580574623",
    //         category: "Coleções"
    //       }
    // ];

    useEffect(() => {
        const promise = api.getBag(bag);

        promise.then((response) => {
            // setBag(response.data);
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