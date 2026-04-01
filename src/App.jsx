
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection"
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar"
import PricingSection from "./components/PricingSection";
import StatsBar from "./components/StatsBar"
import ProductsCartsTitle from "./components/ui/ProductsCartsTitle";
import { useState } from "react";




function App() {

  const [carts, setCarts] = useState([]);

  
  

  return (
    <>
      <Navbar carts={carts} setCarts={setCarts}/>
      <HeroSection  />
      <StatsBar />
      <ProductsCartsTitle  carts={carts} setCarts={setCarts}/>
      
    
      <HowItWorks />
      <PricingSection />
      <Footer />

      <ToastContainer />
      
    </>
  )
}

export default App
