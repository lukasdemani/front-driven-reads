import { Container, Book, Cover, BooksScroll, TitleSection } from "../components/HomeComponents/BooksSection/index";
import Header from "../components/HomeComponents/Header/index";
import api from '../services/api';
import { useState, useEffect, useContext } from "react";
import AuthContext from "../contexts/AuthContext";


export default function HomePage() {
    const [allBooks, setAllBooks] = useState([]);
    const { auth } = useContext(AuthContext);
   
    useEffect(() => {
        const promise = api.getBooks(auth);

        promise.then((response) => {
            console.log(response.data.books);
            setAllBooks(response.data.books);
            console.log(allBooks);
        });
        promise.catch((error) => {
            console.log(error);
        });
    
      }, []);

    function filterBooks(section){
        allBooks.filter((book) => book)
    }
    
    return (
        <>
            <Header></Header>
            <Container>
                <TitleSection>Mais Vendidos</TitleSection>
                <BooksScroll>
                {allBooks.map((book) => 
                    <Book>
                        <Cover>
                            <img src={book.coverUrl}></img>
                        </Cover>
                        <p>{book.title}</p>
                    </Book>
                )}
                </BooksScroll>

                <TitleSection>Recomendados</TitleSection>
                <BooksScroll>
                {allBooks.map((book) => 
                    <Book>
                        <Cover>
                        <img src={book.coverUrl}></img>
                        </Cover>
                        <p>{book.title}</p>
                    </Book>
                )}
                </BooksScroll>

                <TitleSection>Clássicos</TitleSection>
                <BooksScroll>
                {allBooks.map((book) => 
                    <Book>
                        <Cover>
                        <img src={book.coverUrl}></img>
                        </Cover>
                        <p>{book.title}</p>
                    </Book>
                )}
                </BooksScroll>

                <TitleSection>Infanto-juvenil</TitleSection>
                <BooksScroll>
                {allBooks.map((book) => 
                    <Book>
                        <Cover>
                        <img src={book.coverUrl}></img>
                        </Cover>
                        <p>{book.title}</p>
                    </Book>
                )}
                </BooksScroll>
            </Container>
        </>
    );
}