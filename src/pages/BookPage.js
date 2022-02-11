import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AddToCartButton, BookCover, BookDetails, BookInformations, Container, DetailsContainer } from "../components/BookPageComponents"
import Loader from "../components/Loader";
import Logo from "../components/Logo"
import api from "../services/api";

function BookPage() {
  const { isbn } = useParams();
  const [book, setBook] = useState(null)

  useEffect(() => renderBook(), [])

  function renderBook() {
    const promise = api.getBook(isbn)

    promise.then(response => {
      setBook(response.data)
    })
  }

  return (
    <Container>
      <Logo />
      {!book ?
        <Loader />
        :
        <>
          <BookCover>
            <img src={book.coverUrl} />
          </BookCover>
          <BookInformations>
            <h2 className="title">{book.title}</h2>
            {book.subtitle && <h2 className="subtitle">{book.subtitle}</h2>}
            <h3 className="author">{book.author}</h3>
            <p className="price">R$ {book.price}</p>
            <p className="description">{book.description}</p>
          </BookInformations>
          <AddToCartButton>Adicionar ao Carrinho</AddToCartButton>
          <BookDetails>
            <p>Detalhes</p>
            <DetailsContainer>
              <div>
                <span>Número de páginas: </span>
                <span className="text">{book.pages}</span>
              </div>
              <div>
                <span>Editora: </span>
                <span className="text">{book.publisher}</span>
              </div>
              <div>
                <span>ISBN:</span>
                <span className="text">{book.ISBN}</span>
              </div>
            </DetailsContainer>
          </BookDetails>
        </>
      }
    </Container>
  )
}

export default BookPage