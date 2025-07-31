"use client";

import Container from "@/components/Container";
import Title from "@/components/Title";
import passeio from "@/data/passeios";
import dynamic from "next/dynamic";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import CardItem from "@/components/Card";
import Image from "next/image";

// Slider import com SSR desativado
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Passeios = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
        },
      },
    ],
    appendDots: (dots) => (
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
    customPaging: () => (
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
    ),
  };

  return (
    <ParallaxProvider>
      <section className="relative py-[80px] md:py-[80px] overflow-hidden">
        {/* Fundo com altura garantida */}
        <div className="absolute top-0 left-0 w-full h-full z-[-2]">
          <Parallax speed={-100}>
            <div className="relative w-full h-[100vh]">
              <Image
                src="/guardachuva.jpg"
                alt="Guarda-chuva"
                fill
                className="object-cover"
                priority
              />
            </div>
          </Parallax>
        </div>

        {/* Camada escura sobre a imagem */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-[-1]" />

        <Container>
          <Title variant="white">PASSEIOS</Title>

          <div className="px-2 md:px-4 pb-16 md:pb-16">
            <Slider {...settings}>
              {passeio.map((tour, index) => (
                <div key={index} className="px-2 py-6">
                  <CardItem
                    title={tour.name}
                    image={tour.images.image1}
                    link={`/passeios/${tour.slug}`}
                    isLink={true} // Corrigido para ser linkável
                  />
                </div>
              ))}
            </Slider>
          </div>
        </Container>
      </section>
    </ParallaxProvider>
  );
};

export default Passeios;
