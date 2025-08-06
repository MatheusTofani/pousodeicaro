import acomodacoes from "@/data/acomodacoes";
import { notFound } from "next/navigation";
import AcomodacaoDetalheView from "@/containers/Detail";
import Header from "@/containers/Header";
import Footer from "@/containers/Footer";
import ClientLoader from "@/components/ClientLoader";
import Whatsapp from "@/components/Whatsapp";

export async function generateStaticParams() {
    return acomodacoes.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
    const acomodacao = acomodacoes.find((a) => a.slug === params.slug);

    if (!acomodacao) return {};

    return {
        title: `${acomodacao.name} | Pouso de Ícaro`,
        description: acomodacao.description?.substring(0, 150) || "Conheça nossa acomodação exclusiva.",
    };
}

export default async function AcomodacaoPage({ params }) {
    const { slug } = params;

    const acomodacao = acomodacoes.find((a) => a.slug === slug);

    if (!acomodacao) return notFound();

    return (
        <div>
            <ClientLoader />
            <Header />
            <AcomodacaoDetalheView acomodacao={acomodacao} />
            <Footer />
            <Whatsapp />

        </div>
    );
}
