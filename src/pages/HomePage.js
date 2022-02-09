import { Container, Book, Cover } from "../components/HomeComponents/BooksSection/index";
import Header from "../components/HomeComponents/Header/index";
import api from '../service/api';
import { useState, useEffect } from "react";

export default function HomePage() {
    const [allBooks, setAllBooks] = useState([]);

    
    useEffect(() => {
        const promise = api.getBooks();

        promise.then((response) => {
            setAllBooks(response.data);
            console.log(response.data);
            console.log(allBooks);
        });
        promise.catch((error) => {
            console.log(error);
        });
    
      }, []);
    
    return (
        <>
            <Header></Header>
            <Container>
                {allBooks.map((book) => 
                    <Book>
                        <Cover>
                            <img src='https://www.designcomcafe.com.br/wp-content/uploads/2017/08/capas-de-livros-solo.jpg'></img>
                        </Cover>
                    </Book>
                )}
            </Container>
        </>
    );
}