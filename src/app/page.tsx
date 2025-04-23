import AvisClients from "@/components/AvisClients";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NotrePizzeria from "@/components/NotrePizzeria";
import Pizzatypes from "@/components/Pizzatypes";
import Products from "@/components/Products";

export default function Home() {
  return (
    <>
      <Hero />
      <Pizzatypes/>
      <Products/>
      <NotrePizzeria/>
      <AvisClients/>
      <Footer/>
    </>
  );
}
