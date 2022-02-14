import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import AuthContext from "./contexts/AuthContext";
import { HomePage, SignInPage, SignUpPage, BagPage } from "./pages/index.js"

export default function App() {
  const [auth, setAuth] = useState({})
  
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/bag" element={<BagPage />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}