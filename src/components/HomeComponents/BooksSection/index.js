
import Book from './Book';
import Container from './Container';

export default function BooksSection(props) {
    return (
        <Container>
            <p>{props.titleSection}</p>
            <Book>
                teste
            </Book>
        </Container>
    );
}