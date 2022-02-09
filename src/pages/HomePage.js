import BooksSection from "../components/HomeComponents/BooksSection/index";
import Header from "../components/HomeComponents/Header/index";

export default function HomePage() {
    return (
        <>
            <Header></Header>
            <BooksSection titleSection="Destaque"></BooksSection>
        </>
    );
}