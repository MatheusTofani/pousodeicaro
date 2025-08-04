// app/page.js (ou app/page.jsx)
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
import ClientLoader from "@/components/ClientLoader";
import Selo from "@/containers/Selo";

export default function Home() {
  return (
    <>
      <ClientLoader />
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
        <Selo />
        <Footer />
        <Whatsapp />
      </div>
    </>
  );
}
