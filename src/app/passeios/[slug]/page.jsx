import passeioData from "@/data/passeios";
import { notFound } from "next/navigation";
import PasseioDetail from "@/containers/PasseiosDetail";
import Header from "@/containers/Header";
import Footer from "@/containers/Footer";
import ClientLoader from "@/components/ClientLoader";
import Whatsapp from "@/components/Whatsapp";

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
