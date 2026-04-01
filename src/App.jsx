
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection"
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar"
import PricingSection from "./components/PricingSection";
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

      <ToastContainer />
      
    </>
  )
}

export default App
