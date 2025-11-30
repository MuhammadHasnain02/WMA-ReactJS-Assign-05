import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CardsDetailPage from "./Pages/CardsDetailPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Navbar />
      <Routes>

        <Route index element={<Home />} />
        <Route path="/post/:id" element={<CardsDetailPage />} />

      </Routes>
      <Footer />
    </div>
  );
  
}

export default App