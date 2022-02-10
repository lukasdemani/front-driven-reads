import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import AuthContext from "./contexts/AuthContext";
import { BookPage, HomePage, SignInPage, SignUpPage } from "./pages/index.js"

export default function App() {
  const [auth, setAuth] = useState()
  console.log(auth)
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/book" element={<BookPage />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}