import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { AuthProvider } from "./contexts/AuthContext";
import { HomePage, SignInPage, SignUpPage } from "./pages/index.js"

export default function App() {
  return (
    //<AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/register" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
    //</AuthProvider>
  );
}