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
            className="text-[#20281D] text-[32px] md:text-[34px] font-light leading-tight text-center md:text-left"
          >
            CHARME, ACONCHEGO, <br />
            <span className="font-normal">NATUREZA E HOSPITALIDADE</span>
          </h2>
          <Line className="bg-[#899D82] mt-4" />
        </div>

        {/* Descrição */}
        <div className="w-full md:w-[50%]">
          <p className="text-[#20281D] text-[18px] md:text-[20px] leading-relaxed">
            Localizada no centro da cidade, ao lado da maior praça da América
            Latina, a Praça dos Girassóis, e a 3 km do lago de Palmas, a pousada
            atende bem aqueles que gostam do movimento da cidade e encanta
            aqueles que idealizam uma hospedagem tranquila. Os quartos são
            equipados com cama de casal, móveis planejados, TV, ar-condicionado,
            Wi-Fi gratuito e banheiro privativo. A estrutura da pousada inclui
            áreas comuns como um jardim super charmoso, um café e saguão com
            sofá, jogos de tabuleiro e pipoqueira à disposição.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default About;
