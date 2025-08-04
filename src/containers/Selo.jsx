import Container from "@/components/Container";
import Title from "@/components/Title";
import { FaStar } from "react-icons/fa";

const Selo = () => {

    const score = [
        {
            nome: "Tripadvisor",
            nota: "4,7",
             max: "5",
            logo: "/selo/tripadvisor.jpg",
        },
        {
            nome: "Google",
            nota: "4,8",
            max: "5",
            logo: "/selo/google.png",
        },
             {
            nome: "Hoteis.com",
            nota: "8,6",
             max: "10",
            logo: "/selo/hoteis.png",
        },
               {
            nome: "Booking",
            nota: "8,3",
             max: "10",
            logo: "/selo/booking.jfif",
        },
    ]

    return (
        <div className="mb-[80px]">

            <Title>
                Nossos selos e avaliações
            </Title>
            <Container className={"flex justify-around"}>
                {score.map((scores, index) => (
                    <div key={index}>
                        <img className="rounded-full w-[100px] mb-[10px]" src={scores.logo} alt="" />
                        <div  className="flex items-center text-[25px] gap-2 text-[#20281D]">
                            <FaStar className="text-[20px]" />
                            <p >
                              <span className="font-bold">{scores.nota}</span>/{scores.max}
                            </p>
                        </div>
                    </div>
                ))}
            </Container>
        </div>
    )
}

export default Selo;