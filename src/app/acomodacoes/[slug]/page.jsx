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
