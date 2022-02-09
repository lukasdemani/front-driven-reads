import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { AuthProvider } from "./contexts/AuthContext";
import  HomePage  from "./pages/HomePage.js";

export default function App() {
  return (
    //<AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
    //</AuthProvider>
  );
}