
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductSection from "./components/ProductSection";
import CategorySection from "./components/CategorySection";

function App() {
 return (
    <>
    <Navbar/>
    <Hero/>
    <CategorySection />
    <ProductSection/>
      
<main className ="p-10">
<h1 className= "text-4xl font-bold">Welcome to ShopZone</h1>

</main>
  
    </>
  );
}

export default App
