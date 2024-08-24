import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { Article } from "./pages/Article";
import { Calc } from "./pages/Calc";
import { Offers } from "./pages/Offers";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/:anchor?" element={<MainPage />} />
        <Route path="article/:id" element={<Article />} />
        <Route path="/calc" element={<Calc />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
