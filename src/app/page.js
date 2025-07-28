import Whatsapp from "@/components/Whatsapp";
import About from "@/containers/About";
import Acomodacoes from "@/containers/Acomodacoes";
import Diferenciais from "@/containers/Diferenciais";
import Faq from "@/containers/Faq";
import Footer from "@/containers/Footer";
import Header from "@/containers/Header";
import Hero from "@/containers/Hero";
import Map from "@/containers/Map";
import Passeios from "@/containers/Passeios";
import Star from "@/containers/star";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <Diferenciais />
      <About />
      <Acomodacoes />
      <Star />
      <Passeios />
      <Map />
      <Faq />
      <Footer />
<Whatsapp />

    </div>
  );
}
