import Container from "@/components/Container";

const Map = () => {
    return (
        <section className="py-[80px] bg-[#20281D]">
            <Container>
            <div className="w-full max-w-xl  aspect-square rounded-[20px] overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.555660372387!2d-44.720717024557715!3d-23.222858549243714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9d6dffe1919589%3A0x74a71661b1968758!2sPouso%20de%20%C3%8Dcaro%20POUSADA%20EM%20PARATY!5e0!3m2!1spt-BR!2sbr!4v1753386212561!5m2!1spt-BR!2sbr"
                    className="w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
            </Container>
        </section>
    );
};

export default Map;
