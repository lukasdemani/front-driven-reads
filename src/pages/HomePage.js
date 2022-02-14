import Header from "../components/Header/index";
import Logo from "../components/Logo";
import BooksSection from "../components/HomeComponents/BooksSection/index";

export default function HomePage() {
  return (
    <>
      <Header />
      <Logo />

      <BooksSection titleSection="Destaque"></BooksSection>
    </>
  );
}