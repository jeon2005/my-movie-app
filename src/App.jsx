import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f6f8] font-sans">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}
