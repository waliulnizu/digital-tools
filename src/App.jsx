import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import ProductsSection from "./components/ProductsSection"
import StatsBar from "./components/StatsBar"


const fetchProducts = async () => {
  const res = await fetch("/public/products.json");
  return res.json();
};

const productsPromise = fetchProducts();

function App() {
  

  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <ProductsSection  productsPromise={productsPromise}/>
    </>
  )
}

export default App
