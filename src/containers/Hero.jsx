const Hero = () => {
  return (
    <section
      className="relative w-full min-h-[90vh] flex items-center justify-center text-white text-center px-4 mb-[80px]"
      aria-label="Seção principal com vídeo de fundo e chamada para reserva"
    >
      {/* Camada escura para contraste */}
      <div
        className="absolute inset-0 bg-black opacity-70 z-[-1]"
        aria-hidden="true"
      />

      {/* Vídeo de fundo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-2]"
        aria-hidden="true"
      // loading="lazy" // vídeo autoplay pode ignorar isso, avaliar uso
      >
        <source src="/Hero.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      {/* Conteúdo central */}
      <header className="z-10 max-w-3xl">
        <p className="text-lg md:text-xl mb-2" aria-label="Boas-vindas">
          Bem-vindos ao
        </p>
        <h1 tabIndex={-1} className="text-3xl md:text-5xl font-bold mb-4">
          Pouso de Ícaro
        </h1>
        <p className="text-sm md:text-lg mb-6">
          Localizada perto do centro histórico de Paraty, a Pousada Pouso de Ícaro
          oferece um ambiente exclusivo, cercado pela natureza, ideal para quem busca
          conforto, silêncio e uma estadia inesquecível.
        </p>

        <a
          href="https://hotels.cloudbeds.com/pt-br/reservas/BF2NIc?currency=brl"
          className="inline-block bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
          aria-label="Faça sua reserva agora"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reservar agora
        </a>
      </header>
    </section>
  );
};

export default Hero;
