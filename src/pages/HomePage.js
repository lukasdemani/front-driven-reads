import { Container, Book, Cover, BooksScroll, TitleSection } from "../components/HomeComponents/BooksSection/index";
import Header from "../components/Header/index"
import api from '../services/api';
import { useState, useEffect, useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router";


export default function HomePage() {
    const [allBooks, setAllBooks] = useState([]);
    let filteredBooks = [];
    const { auth } = useContext(AuthContext);
    let navigate = useNavigate();
   
    useEffect(() => {
        const promise = api.getBooks(auth);

        promise.then((response) => {
            setAllBooks(response.data.books);
        });
        promise.catch((error) => {
            console.log(error);
        });
    
      }, []);

    function filterBooks(section){
        filteredBooks = allBooks.filter((book) => book.category == section)
    }

    function handleGetBook(isbn){
        navigate(`/livro/${isbn}`);
    }
    
    return (
        <>
            <Header></Header>
            <Container>
                <TitleSection>Romance</TitleSection>
                <BooksScroll>
                    {filterBooks("Romance")}
                    {filteredBooks.map((book) => 
                        <Book onClick={() => handleGetBook(book.ISBN)}>
                            <Cover>
                                <img src={book.coverUrl}></img>
                            </Cover>
                            <p>{book.title}</p>
                        </Book>
                )}
                </BooksScroll>

                <TitleSection>Coleções</TitleSection>
                <BooksScroll>
                {filterBooks("Coleções")}
                {filteredBooks.map((book) => 
                    <Book onClick={() => handleGetBook(book.ISBN)}>
                        <Cover>
                        <img src={book.coverUrl}></img>
                        </Cover>
                        <p>{book.title}</p>
                    </Book>
                )}
                </BooksScroll>

                <TitleSection>Literatura Nacional</TitleSection>
                <BooksScroll>
                {filterBooks("Literatura Nacional")}
                {filteredBooks.map((book) => 
                    <Book onClick={() => handleGetBook(book.ISBN)}>
                        <Cover>
                        <img src={book.coverUrl}></img>
                        </Cover>
                        <p>{book.title}</p>
                    </Book>
                )}
                </BooksScroll>

                <TitleSection>Fantasia</TitleSection>
                <BooksScroll>
                {filterBooks("Fantasia")}
                {filteredBooks.map((book) => 
                    <Book onClick={() => handleGetBook(book.ISBN)}>
                        <Cover>
                        <img src={book.coverUrl}></img>
                        </Cover>
                        <p>{book.title}</p>
                    </Book>
                )}
                </BooksScroll>
                <TitleSection>Programação</TitleSection>
                <BooksScroll>
                {filterBooks("Programação")}
                {filteredBooks.map((book) => 
                    <Book onClick={() => handleGetBook(book.ISBN)}>
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