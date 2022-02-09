import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBook from "./pages/adminPages/AddBooks.js";
//import { AuthProvider } from "./contexts/AuthContext";
import  HomePage  from "./pages/HomePage.js";

export default function App() {
  return (
    //<AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add-book" element={<AddBook />} />
          </Routes>
        </BrowserRouter>
    //</AuthProvider>
  );
}