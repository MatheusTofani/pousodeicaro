import Container from "@/components/Container";
import Title from "@/components/Title";
import Head from "next/head";

const Map = () => {
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
              "image": "URL_da_imagem_ou_logo_da_pousada_aqui",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "R. Waldemar Mathias, 169 - Parque Imperial",
                "addressLocality": "Paraty",
                "addressRegion": "RJ",
                "postalCode": "23970-000",
                "addressCountry": "BR"
              },
              "telephone": "+55-XX-XXXXX-XXXX",
              "url": "https://seudominio.com",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -23.2228585,
                "longitude": -44.720717
              }
            }),
          }}
        />
      </Head>

      <section
        aria-label="Localização da Pousada Pouso de Ícaro em Paraty"
        className="py-[80px] bg-[#20281D]"
      >
        <Container className="flex flex-col-reverse p-5 md:p-0 md:flex-row items-center justify-between gap-[40px]">
          <div className="w-full md:w-[500px] aspect-square rounded-[20px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.555660372387!2d-44.720717024557715!3d-23.222858549243714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9d6dffe1919589%3A0x74a71661b1968758!2sPouso%20de%20%C3%8Dcaro%20POUSADA%20EM%20PARATY!5e0!3m2!1spt-BR!2sbr!4v1753386212561!5m2!1spt-BR!2sbr"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Pousada Pouso de Ícaro em Paraty"
            />
          </div>

          <div className="flex flex-col justify-center items-center text-center w-full md:w-[50%]">
            {/* Use um h2 para melhor SEO e estruturação */}
            <Title variant="white" as="h2">
              ONDE ESTAMOS
            </Title>

            <p className="text-[#FDFBFE] mb-[30px] text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed">
              A poucos passos do Centro Histórico de Paraty!
Desfrute da tranquilidade do bairro Parque Imperial com o agito do centro.


            </p>

            {/* Endereço dentro de <address> para SEO */}
            <address className="not-italic text-[#FDFBFE] text-[16px] sm:text-[18px] md:text-[18px] leading-relaxed font-semibold">
              R. Waldemar Mathias, 169 - Parque Imperial, Paraty - RJ, 23970-000
            </address>

          </div>
        </Container>
      </section>
    </>
  );
};

export default Map;
