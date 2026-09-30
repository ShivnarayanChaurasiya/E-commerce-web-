import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductSection from "./components/ProductSection";
import CategorySection from "./components/CategorySection";

import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import Profile from "./pages/Profile";

import { CartProvider } from "./context/CartContext";


function Home({ searchTerm }) {
  return (
    <>
      <Hero />
      <CategorySection />
      <ProductSection searchTerm={searchTerm} />

      <section
        id="contact"
        className="px-6 py-20 bg-gray-900 text-white text-center"
      >
        <h2 className="text-3xl font-bold">
          Contact Us
        </h2>

        <p className="mt-3 text-gray-300">
          Contact section coming soon.
        </p>
      </section>
    </>
  );
}


function App() {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <CartProvider>

      <BrowserRouter>

        <Navbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <main className="pt-20">

          <Routes>

            <Route
              path="/"
              element={<Home searchTerm={searchTerm} />}
            />

            <Route
              path="/product/:id"
              element={<ProductDetails />}
            />

            <Route
              path="/cart"
              element={<CartPage />}
            />

            <Route
              path="/profile"
              element={<Profile />}
            />

          </Routes>

        </main>

      </BrowserRouter>

    </CartProvider>
  );
}

export default App;