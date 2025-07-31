"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../components/Container";
import { IoIosPeople } from "react-icons/io";
import { FaBed } from "react-icons/fa";

export default function PasseioDetail({ passeio }) {
  if (!passeio || !passeio.images) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Passeio não encontrado.</p>
      </div>
    );
  }

  const images = Object.values(passeio.images || {});
  const [activeImage, setActiveImage] = useState(images[0]);

  const isExternal = (src) => src?.startsWith("http");

  return (
    <div className="min-h-screen pt-[100px] bg-[#FDFBFE] text-[#20281D] flex items-center p-5 md:px-[0]">
      <Container className="flex flex-col md:flex-row justify-between w-full gap-8">
        {/* Galeria de imagens */}
        <div className="md:w-[50%] w-full">
          <div className="relative w-full h-[300px] md:h-[450px] mb-4 rounded-[20px] overflow-hidden">
            {isExternal(activeImage) ? (
              <img
                src={activeImage}
                alt={passeio.name}
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <Image
                src={activeImage}
                alt={passeio.name}
                fill
                className="object-cover rounded-lg"
              />
            )}
          </div>

          <div className="flex gap-3 mb-6 overflow-x-auto pb-1">
            {images.map((src, index) => (
              <div
                key={index}
                className={`relative w-[80px] h-[60px] border-2 cursor-pointer rounded-md overflow-hidden transition-all ${
                  activeImage === src ? "border-[#899D82] border-3" : "border-transparent"
                }`}
                onClick={() => setActiveImage(src)}
              >
                {isExternal(src) ? (
                  <img
                    src={src}
                    alt={`Miniatura ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={src}
                    alt={`Miniatura ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Conteúdo do passeio */}
        <div className="w-full md:w-[40%] mt-6 md:mt-0 flex flex-col">
          <h1 className="text-4xl font-bold mb-4">{passeio.name}</h1>
          <p className="text-lg leading-relaxed mb-4">{passeio.description}</p>

          <div className="flex text-[30px] gap-5 mb-5">
            {passeio.users && (
              <p className="flex items-center gap-2 font-[500]">
                <IoIosPeople className="text-[40px]" /> {passeio.users}
              </p>
            )}
            {passeio.beds && (
              <p className="flex items-center gap-2 font-[500]">
                <FaBed className="text-[40px]" /> {passeio.beds}
              </p>
            )}
          </div>

          <a href="#" aria-label="Reservar agora">
            <button className="w-full bg-[#899D82] text-white py-3 rounded-full hover:bg-[#7a8f74] transition-colors font-medium">
              Reservar agora
            </button>
          </a>
        </div>
      </Container>
    </div>
  );
}
