import Container from "@/components/Container";
import LazyMap from "@/components/LazyMap";
import Title from "@/components/Title";


const Map = () => {
  return (
    <>
    

      <section
        aria-label="Localização da Pousada Pouso de Ícaro em Paraty"
        className="py-[80px] bg-[#20281D]"
      >
        <Container className="flex flex-col-reverse p-5 md:p-0 md:flex-row items-center justify-between gap-[40px]">
          <div className="w-full md:w-[500px] aspect-square rounded-[20px] overflow-hidden">
         <LazyMap />
          </div>

          <div className="flex flex-col justify-center items-center text-center w-full md:w-[50%]">
            <Title variant="white" as="h2">
              ONDE ESTAMOS
            </Title>

            <p className="text-[#FDFBFE] mb-[30px] text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed">
              A poucos passos do Centro Histórico de Paraty!
Desfrute da tranquilidade do bairro Parque Imperial com o agito do centro.


            </p>

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
