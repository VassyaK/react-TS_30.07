import { Route, Routes } from "react-router-dom";
import { Navigation } from "./Navigation";
import { AboutePage } from "./pages/AboutPage";
import { ProductPage } from "./pages/ProductPage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/about" element={<AboutePage />} />
      </Routes>
    </>
  );
}

export default App;
