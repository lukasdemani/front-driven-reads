import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AddToCartButton, BookCover, BookDescription, BookDetails, BookInformations, Container, DetailsContainer } from "../components/BookPageComponents"
import Header from "../components/Header";
import Loader from "../components/Loader";
import Logo from "../components/Logo"
import AuthContext from "../contexts/AuthContext";
import api from "../services/api";
import { Book, Cover, BooksScroll, TitleSection } from "../components/HomeComponents/BooksSection/index";

 
export default function BookPage() {
  let navigate = useNavigate()
  const { search } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => renderSearch(), [])

  function renderSearch() {
    
    const promise = api.searchBook(search)

    promise.then(response => 
        console.log(response.data)
    //   setBooks(response.data)
    )
  }
  
  return (
    <>
        <Header></Header>
        <Container>
            <TitleSection>Pesquisa</TitleSection>
            <BooksScroll>
                {books.map((book) => 
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
