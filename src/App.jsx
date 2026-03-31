import CartsSection from "./components/CartsSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection"
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar"
import PricingSection from "./components/PricingSection";
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
      <HowItWorks />
      <PricingSection />
      <Footer />
      <CartsSection />
    </>
  )
}

export default App
