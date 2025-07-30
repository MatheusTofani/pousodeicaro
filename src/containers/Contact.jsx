import Container from "@/components/Container";
import Title from "@/components/Title";

const SectionContato = () => {
    return (
        <section className="pt-[180px] pb-[80px] bg-[#F8F8F8]">
            <Container className={"p-5 md:p-[0]"}>
                <Title className="text-center mb-10">Fale Conosco</Title>

                <form className="flex flex-col gap-8 w-full">
                    {/* Nome */}
                    <div className="flex flex-col w-full">
                        <label htmlFor="name" className="mb-1 text-[#20281D] font-medium">
                            Nome
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Digite seu nome"
                            className="border-b-2 border-[#20281D] focus:border-[#899D82] focus:outline-none py-2 px-1 bg-transparent placeholder:text-[#20281D] w-full"
                            required
                        />
                    </div>

                    {/* Telefone */}
                    <div className="flex flex-col w-full">
                        <label htmlFor="phone" className="mb-1 text-[#20281D] font-medium">
                            Telefone
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="(00) 00000-0000"
                            className="border-b-2 border-[#20281D] focus:border-[#899D82] focus:outline-none py-2 px-1 bg-transparent placeholder:text-[#20281D] w-full"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col w-full">
                        <label htmlFor="email" className="mb-1 text-[#20281D] font-medium">
                            E-mail
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Digite seu e-mail"
                            className="border-b-2 border-[#20281D] focus:border-[#899D82] focus:outline-none py-2 px-1 bg-transparent placeholder:text-[#20281D] w-full"
                            required
                        />
                    </div>

                    {/* Mensagem */}
                    <div className="flex flex-col w-full">
                        <label htmlFor="message" className="mb-1 text-[#20281D] font-medium">
                            Mensagem
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            placeholder="Escreva sua mensagem"
                            className="border-b-2 border-[#20281D] focus:border-[#899D82] focus:outline-none py-2 px-1 bg-transparent placeholder:text-[#20281D] w-full"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="mt-6 px-6 py-3 bg-[#20281D] text-white rounded-full hover:bg-[#2b3923] transition-colors duration-300 w-full md:w-auto self-start"
                    >
                        Enviar mensagem
                    </button>
                </form>
            </Container>
        </section>
    );
};

export default SectionContato;
