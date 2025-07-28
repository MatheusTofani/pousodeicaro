"use client";

import Container from "@/components/Container";
import Title from "@/components/Title";
import passeio from "@/data/passeios";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const Passeios = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true, // Ativado por padrão
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                arrows: true // ainda mostra em tablet
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false, // remove as arrows no mobile
                centerMode: true,
                centerPadding: "40px"
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
        <ParallaxProvider>
            <section className="relative py-[80px] md:py-[80px] overflow-hidden">
                {/* Fundo com altura garantida */}
                <div className="absolute top-0 left-0 w-full h-full z-[-2]">
                    <Parallax speed={-100}>
                        <div className="w-full h-full">
                            <img
                                src="/guardachuva.jpg"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </Parallax>
                </div>

                {/* Camada escura sobre a imagem */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-[-1]"></div>

                <Container>
                    <Title variant="white">PASSEIOS</Title>

                    <div className="px-2 md:px-4 pb-16 md:pb-16">
                        <Slider {...settings}>
                            {passeio.map((tour, index) => (
                                <div key={index} className="px-2 py-6">
                                    <div
                                        className="rounded-[20px] h-[350px] md:h-[400px] relative cursor-pointer hover:scale-[1.05] transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-[#00000070] mx-auto"
                                        style={{ maxWidth: "300px" }}
                                    >
                                        <a className="w-full h-full block">
                                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-[20px] z-[2]"></div>
                                            <img
                                                className="rounded-[20px] absolute top-0 left-0 h-full w-full z-[1] object-cover"
                                                src={tour.images.image1}
                                                alt={tour.name}
                                            />

                                            <div className="absolute p-[20px] md:p-[30px] z-[3] flex flex-col justify-between items-center h-full w-full">
                                                <p className="text-[#FDFBFE] text-[18px] md:text-[20px] text-center">{tour.name}</p>
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
            </section>
        </ParallaxProvider>
    );
};

export default Passeios;