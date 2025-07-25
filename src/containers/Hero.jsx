const Hero = () => {
    return (
        <section className="relative w-full h-[90vh] flex items-center justify-center text-white text-center px-4 mb-[80px]">
            {/* Camada escura para contraste */}
            <div
                className="absolute w-full h-[90vh] bg-black z-[-1] opacity-[70%]"
                aria-hidden="true"
            ></div>

            {/* Vídeo de fundo */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute w-full h-[90vh] object-cover z-[-2]"
                aria-hidden="true"
            >
                <source src="/hero.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
            </video>

            {/* Conteúdo central */}
            <div className="z-10 max-w-3xl">
                <p className="text-lg md:text-xl mb-2" aria-label="Boas-vindas">
                    Bem-vindos ao
                </p>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    Pouso de Ícaro
                </h1>
                <p className="text-sm md:text-lg mb-6">
                    A melhor localização de Paraty: a poucos passos do centro histórico,
                    em um refúgio de silêncio e serenidade.
                </p>

                <a
                    href="#contato"
                    className="inline-block bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
                    aria-label="Entre em contato conosco"
                >
                    Reservar agora
                </a>
            </div>
        </section>
    );
};

export default Hero;
