import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AddToCartButton, BookCover, BookDescription, BookDetails, BookInformations, Container, DetailsContainer } from "../components/BookPageComponents"
import Header from "../components/Header";
import Loader from "../components/Loader";
import AuthContext from "../contexts/AuthContext";
import api from "../services/api";

function BookPage() {
  const { isbn } = useParams();
  const [book, setBook] = useState(null)
  const [showMore, setShowMore] = useState(false)
  const { auth } = useContext(AuthContext)
  let navigate = useNavigate()

  useEffect(() => renderBook(), [])

  function renderBook() {
    const promise = api.getBook(isbn, auth.token)

    promise.then(response => {
      setBook(response.data)
    })
  }

  function handleAddToCart(book) {
    const infosBook = {
      title: book.title,
      author: book.author,
      price: book.price,
      coverUrl: book.coverUrl
    }

    const promise = api.addToCart(infosBook, auth.token)

    promise.then(() => navigate("/carrinho"))
  }

  function showText() {
    setShowMore(!showMore)
  }

  return (
    <Container>
      <Header />
      {!book ?
        <Loader />
        :
        <>
          <BookCover>
            <img src={book.coverUrl} alt={book.title} />
          </BookCover>
          <BookInformations>
            <h2 className="title">{book.title}</h2>
            {book.subtitle && <h2 className="subtitle">{book.subtitle}</h2>}
            <h3 className="author">{book.author}</h3>
            <p className="price">R$ {book.price}</p>
            <BookDescription showMore={showMore}>
              {!showMore ?
                <>
                  {book.description.substr(0, 300)}
                  <p className="more" onClick={showText}>Leia mais</p>
                </>
                :
                <>
                  {book.description}
                  <p className="less" onClick={showText}>Leia menos</p>
                </>
              }
            </BookDescription>
          </BookInformations>
          <AddToCartButton onClick={() => handleAddToCart(book)}>Adicionar ao Carrinho</AddToCartButton>
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