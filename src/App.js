import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import AuthContext from "./contexts/AuthContext";
import { BookPage, HomePage, SignInPage, SignUpPage } from "./pages/index.js"

export default function App() {
  const [auth, setAuth] = useState() // tem o token e o nome

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <BrowserRouter>
        <Routes>
          <Route path="/livros" element={<HomePage />} />
          <Route path="/" element={<SignInPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/livro/:isbn" element={<BookPage />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}