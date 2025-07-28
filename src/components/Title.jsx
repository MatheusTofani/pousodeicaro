import Line from "./Line";

const Title = ({ children, variant = "black", className }) => {
  const isWhite = variant === "white";

  return (
    <div
      className={`mb-[50px] text-[24px] md:text-[34px] font-[400] ${
        isWhite ? "text-[#FDFBFE]" : "text-[#20281D]"
      } flex flex-col items-center justify-center ${className}`}
    >
      {children}
      <Line className={isWhite ? "bg-[#FDFBFE]" : "bg-[#20281D] text-center"} />
    </div>
  );
};

export default Title;
