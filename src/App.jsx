import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/favorites"
          element={<div className="p-10 text-center">Favorites page</div>}
        />
      </Routes>
      <Footer />
    </>
  );
}
