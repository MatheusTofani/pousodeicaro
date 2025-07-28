import Container from "@/components/Container";
import Line from "@/components/Line";

const About = () => {
  return (
    <section
      aria-labelledby="about-title"
      role="region"
      className="py-[80px] px-5 md:px-0"
    >
      <Container className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Texto principal */}
        <div className="w-full md:w-[40%] flex flex-col">
          <div className="flex justify-end">
            <Line className="bg-[#20281D] mb-4" />
          </div>
          <h2
            id="about-title"
            className="text-[#20281D] text-[24px] md:text-[34px] font-light leading-tight text-center md:text-left"
          >
            SOFISTICAÇÃO, ACONCHEGO, <br />
            <span className="font-normal">NATUREZA E CHARME</span>
          </h2>
          <Line className="bg-[#899D82] mt-4" />
        </div>

        {/* Descrição */}
        <div className="w-full md:w-[50%]">
          <p className="text-[#20281D] text-[18px] md:text-[20px] leading-relaxed">
            A Pousada Pouso de Ícaro é uma pousada em Paraty que une conforto, sofisticação e atendimento de qualidade. Com localização privilegiada na praia de Paraty, oferecemos acomodações de luxo, serviços personalizados e uma experiência completa para quem busca tranquilidade e exclusividade.

            Nosso objetivo é ser referência como hotel de alto padrão em Paraty, proporcionando uma estadia inesquecível em um ambiente paradisíaco. Ideal para casais, famílias ou viajantes que desejam relaxar e aproveitar o melhor do litoral com conforto e elegância.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default About;
