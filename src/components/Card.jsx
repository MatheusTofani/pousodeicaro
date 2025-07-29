// components/CardItem.jsx
import Image from "next/image";
import Link from "next/link";

const CardItem = ({ title, image, link = "#", isLink = true, priority = false }) => {
  const Wrapper = isLink ? Link : "a";

  return (
    <div
      className="relative rounded-[20px] h-[350px] md:h-[400px] mx-auto cursor-pointer hover:scale-[1.05] transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-[#00000070]"
      style={{ maxWidth: "300px" }}
    >
      <Wrapper href={link} className="w-full h-full block">
        {/* Camada escura */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-[20px] z-[2]" />

        {/* Imagem */}
        {typeof image === "string" && image.startsWith("/") ? (
          // SSR friendly: use Image para acomodacoes (Next Image otimiza local e remota)
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="rounded-[20px] object-cover z-[1]"
            priority={priority}
          />
        ) : (
          // fallback ou imagem dinâmica de passeios, que pode vir externa
          <img
            src={image}
            alt={title}
            className="rounded-[20px] absolute top-0 left-0 h-full w-full z-[1] object-cover"
          />
        )}

        {/* Conteúdo */}
        <div className="absolute p-[20px] md:p-[30px] z-[3] flex flex-col justify-between items-center h-full w-full">
          <p className="text-[#FDFBFE] text-[18px] md:text-[20px] text-center">{title}</p>
          <span className="w-full bg-[#FDFBFE] h-[40px] rounded-full text-[16px] font-[500] flex items-center justify-center hover:bg-[#e8e6e9] transition-colors">
            Ver mais
          </span>
        </div>
      </Wrapper>
    </div>
  );
};

export default CardItem;
