"use client";

import Container from "@/components/Container";
import Title from "@/components/Title";
import acomodacoes from "@/data/acomodacoes";
import Slider from "react-slick";
import { useEffect, useState } from "react";

// Importe os estilos do react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Acomodacoes = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize(); // Verifica no carregamento inicial
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: !isMobile, // Remove arrows apenas no mobile
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: !isMobile
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Garante que arrows ficarão desativados no mobile
          centerMode: true,
          centerPadding: "20px"
        }
      }
    ],
    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          bottom: "-40px",
          width: "100%",
        }}
      >
        <ul style={{ margin: "0", padding: "0" }}>{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          backgroundColor: "#FDFBFE",
          opacity: "0.5",
          margin: "0 4px",
        }}
      />
    )
  };

  return (
    <section className="py-[60px] md:py-[80px] bg-[#899D82] relative">
      <Container>
        <Title variant="white">
          ACOMODAÇÕES
        </Title>

        <div className="px-2 md:px-4 pb-[60px] md:pb-16">
          <Slider {...settings}>
            {acomodacoes.map((acomodacao, index) => (
              <div key={index} className="px-2 py-4 md:py-6">
                <div className="rounded-[20px] h-[350px] md:h-[400px] relative cursor-pointer hover:scale-[1.05] transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-[#00000070] mx-auto" style={{ maxWidth: "300px" }}>
                  <a className="w-full h-full block">
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-[20px] z-[2]"></div>
                    <img 
                      className="rounded-[20px] absolute top-0 left-0 h-full w-full z-[1] object-cover" 
                      src={acomodacao.images.image1} 
                      alt={acomodacao.name} 
                    />

                    <div className="absolute p-[20px] md:p-[30px] z-[3] flex flex-col justify-between items-center h-full w-full">
                      <p className="text-[#FDFBFE] text-[18px] md:text-[20px] text-center">{acomodacao.name}</p>
                      <button className="w-full bg-[#FDFBFE] h-[40px] rounded-full text-[16px] font-[500] cursor-pointer hover:bg-[#e8e6e9] transition-colors">
                        Ver mais
                      </button>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>

      {/* Estilos customizados para os dots */}
      <style jsx global>{`
        .slick-dots li.slick-active div {
          background-color: #FDFBFE !important;
          opacity: 1 !important;
        }
        .slick-dots {
          position: absolute;
          bottom: -30px;
        }
        /* Esconde arrows em mobile */
        @media (max-width: 767px) {
          .slick-prev, .slick-next {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Acomodacoes;