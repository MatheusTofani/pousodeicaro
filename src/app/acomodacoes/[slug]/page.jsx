import acomodacoes from "@/data/acomodacoes";
import { notFound } from "next/navigation";
import AcomodacaoDetalheView from "@/containers/Detail";
import Header from "@/containers/Header";
import Footer from "@/containers/Footer";

export async function generateStaticParams() {
    return acomodacoes.map((a) => ({ slug: a.slug }));
}

export default function AcomodacaoPage({ params }) {
    const acomodacao = acomodacoes.find((a) => a.slug === params.slug);
    if (!acomodacao) return notFound();

    return (
        <div>
            <Header />
            <AcomodacaoDetalheView acomodacao={acomodacao} />
            <Footer />
        </div>

    );
}
