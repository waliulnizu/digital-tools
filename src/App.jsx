
import CartsSection from "./components/CartsSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection"
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar"
import PricingSection from "./components/PricingSection";
import ProductsSection from "./components/ProductsSection"
import StatsBar from "./components/StatsBar"
import ProductsCartsTitle from "./components/ui/ProductsCartsTitle";




function App() {

  
  

  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <ProductsCartsTitle />
      
    
      <HowItWorks />
      <PricingSection />
      <Footer />
      
    </>
  )
}

export default App
