import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBook from "./pages/adminPages/AddBooks.js";
//import { AuthProvider } from "./contexts/AuthContext";
import  HomePage  from "./pages/HomePage.js";
import BagPage from "./pages/BagPage.js";

export default function App() {
  return (
    //<AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/bag" element={<BagPage />} />
          </Routes>
        </BrowserRouter>
    //</AuthProvider>
  );
}