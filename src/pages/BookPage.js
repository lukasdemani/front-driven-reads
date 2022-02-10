import { AddToCartButton, BookCover, BookDetails, BookInformations, Container, DetailsContainer } from "../components/BookPageComponents"
import Logo from "../components/Logo"

function BookPage() {
  return (
    <Container>
      <Logo />
      <BookCover>
        <img src="https://images-na.ssl-images-amazon.com/images/I/51NjUyqABrL._SX446_BO1,204,203,200_.jpg" />
      </BookCover>
      <BookInformations>
        <h2 className="title">Sherlock Holmes</h2>
        <h3 className="author">Arthur Conan Doyle</h3>
        <p className="price">R$ 75,30</p>
        <p className="description">Em 1887, o escritor escocês sir Arthur Conan Doyle criou Sherlock Holmes, o infalível detetive a quem os agentes da Scotland Yard recorriam para solucionar os mistérios mais intrigantes da Inglaterra vitoriana. Desde então, as aventuras do mestre da investigação atraem leitores ávidos por chegar à última página e ver o enigma desvendado. Esta obra completa reúne os quatro romances e os 56 contos sobre as aventuras do detetive mais famoso do mundo e de seu fiel companheiro, o dr. Watson. Para desvendar mistérios, o faro e a astúcia de Sherlock Holmes levam às fontes menos óbvias, às informações mais precisas. Um modelo que influencia até hoje a literatura policial e revela fôlego para impressionar gerações de leitores através dos tempos</p>
      </BookInformations>
      <AddToCartButton>Adicionar ao Carrinho</AddToCartButton>
      <BookDetails>
        <p>Detalhes</p>
        <DetailsContainer>
          <div>
            <span>Número de páginas: </span>
            <span className="text">1808</span>
          </div>
          <div>
            <span>Editora: </span>
            <span className="text">HarperCollins</span>
          </div>
          <div>
            <span>ISBN:</span>
            <span className="text">9788595080836</span>
          </div>
        </DetailsContainer>
      </BookDetails>
    </Container>
  )
}

export default BookPage