"use client";

import dynamic from "next/dynamic";
import Container from "@/components/Container";
import Title from "@/components/Title";
import acomodacoes from "@/data/acomodacoes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardItem from "@/components/Card";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Acomodacoes = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
    appendDots: (dots) => (
      <div className="absolute -bottom-10 w-full">
        <ul className="m-0 p-0 flex justify-center">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-4 h-4 rounded-full bg-[#FDFBFE] opacity-50 mx-1" />
    ),
  };


  const areas = [
    {
      name: "Suítes",
      image: "/acomodacoes/suite-1-a/image1.jpg",
      href: "/acomodacoes",
    },
    {
      name: "Café da manhã",
      image: "/cafe/image1.jpg",
      href: "/cafe",
    },
    {
      name: "Áreas Comuns",
      image: "/pousada/image8.jpg",
      href: "/cafe",
    },
    {
      name: "Restaurantes",
      image: "/restaurantes/quintaldavo.png",
      href: "/restaurantes",
    },
  ]

  return (
    <section className="py-[60px]  md:py-[80px] bg-[#899D82] relative">
      <Container>
        <Title variant="white">NOSSA POUSADA</Title>

        <div className="px-2 md:px-4 pb-[60px] md:pb-16">
          <Slider {...settings}>
            {areas.map((area, index) => (
              <div key={index} className="px-2 py-4 md:py-6">
                <CardItem
                  title={area.name}
                  image={area.image}
                  link={area.href}
                  isLink={true}
                  priority={index === 0}
                />
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default Acomodacoes;
