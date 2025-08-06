import passeioData from "@/data/passeios";
import { notFound } from "next/navigation";
import PasseioDetail from "@/containers/PasseiosDetail";
import Header from "@/containers/Header";
import Footer from "@/containers/Footer";
import ClientLoader from "@/components/ClientLoader";
import Whatsapp from "@/components/Whatsapp";

export async function generateMetadata({ params }) {
    const { slug } = params;
    const passeio = passeioData.find((p) => p.slug === slug);

    if (!passeio) {
        return {
            title: "Passeio não encontrado | Pouso de Ícaro",
            description: "Passeio não encontrado na Pousada Pouso de Ícaro em Paraty.",
        };
    }

    return {
        title: `${passeio.name} | Pouso de Ícaro`,
        description: passeio.description || `Conheça o passeio ${passeio.name} oferecido pela Pouso de Ícaro em Paraty.`,
        keywords: passeio.keywords || ["Passeios em Paraty", "Pousada Pouso de Ícaro", "Passeio turístico"],
        openGraph: {
            title: `${passeio.name} | Pouso de Ícaro`,
            description: passeio.description || `Conheça o passeio ${passeio.name} oferecido pela Pouso de Ícaro em Paraty.`,
            images: [
                {
                    url: passeio.images.image1 || "/images/default-passeio.jpg",
                    width: 1200,
                    height: 630,
                    alt: passeio.name || "Passeio Pouso de Ícaro",
                },
            ],
        },
    };
}

export async function generateStaticParams() {
    return passeioData.map((p) => ({ slug: p.slug }));
}

export default async function PasseioPage({ params }) {
    const { slug } = await params;  // <== aqui está a correção

    const passeio = passeioData.find((p) => p.slug === slug);
    if (!passeio) return notFound();



    return (
        <>
            <ClientLoader />
            <Header />
            <PasseioDetail passeio={passeio} />
            <Footer />
            <Whatsapp />
        </>
    );
}
