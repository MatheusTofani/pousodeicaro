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
            <strong className="font-normal">NATUREZA E CHARME</strong>
          </h2>
          <Line className="bg-[#899D82] mt-4" />
        </div>

        {/* Descrição */}
        <div className="w-full md:w-[50%] text-[#20281D] text-[18px] md:text-[20px] leading-relaxed">
          <p className="mb-4">
            A Pousada Pouso de Ícaro é uma pousada em Paraty que une conforto, sofisticação e atendimento de qualidade. Com localização privilegiada na praia de Paraty, oferecemos acomodações de luxo, serviços personalizados e uma experiência completa para quem busca tranquilidade e exclusividade.
          </p>

          
          {/* Sugestão: link interno para página de reservas */}
          <p className="mt-6 text-center md:text-left">
            <a
              href="/reservas"
              className="inline-block bg-[#899D82] text-white px-6 py-3 rounded-full font-medium hover:bg-[#809D82] transition"
              aria-label="Faça sua reserva agora"
            >
              Faça sua reserva agora
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default About;
