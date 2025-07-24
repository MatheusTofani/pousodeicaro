import About from "@/containers/About";
import Acomodacoes from "@/containers/Acomodacoes";
import Diferenciais from "@/containers/Diferenciais";
import Header from "@/containers/Header";
import Hero from "@/containers/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Diferenciais />
      <About />
      <Acomodacoes/>
    </div>
  );
}
