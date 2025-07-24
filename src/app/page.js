import About from "@/containers/About";
import Acomodacoes from "@/containers/Acomodacoes";
import Diferenciais from "@/containers/Diferenciais";
import Faq from "@/containers/Faq";
import Footer from "@/containers/Footer";
import Header from "@/containers/Header";
import Hero from "@/containers/Hero";
import Map from "@/containers/Map";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Diferenciais />
      <About />
      <Map />
      <Faq />
     <Footer />
    </div>
  );
}
