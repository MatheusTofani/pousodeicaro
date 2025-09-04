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
import Seguranca from "@/containers/Seguranca";
import Head from "next/head";
export default function Home() {
  return (
    <>
      {/* Schema LocalBusiness para SEO */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              "name": "Pousada Pouso de Ícaro",
              "image": "http://192.168.0.4:3000/logos/logo-png/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "R. Waldemar Mathias, 169 - Parque Imperial",
                "addressLocality": "Paraty",
                "addressRegion": "RJ",
                "postalCode": "23970-000",
                "addressCountry": "BR"
              },
              "telephone": "+55-24-3038-0537",
              "url": "https://www.pousodeicaro.com.br/",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -23.2228585,
                "longitude": -44.720717
              }
            }),
          }}
        />
        <meta name="google-site-verification" content="9FSbjWxMBJ_4_iRAZNKxL-Z2PGwdrRO9Zzh8KDwKDys" />
      </Head>
      <ClientLoader />
      <div className="overflow-hidden">
        <Header />
        <Hero />
        <Diferenciais />
        <About />
        <Acomodacoes />
        <Star />
        <Passeios />
        <Seguranca />
        <Map />
        <Faq />
        <Selo />
        <Footer />
        <Whatsapp />
      </div>
    </>
  );
}
