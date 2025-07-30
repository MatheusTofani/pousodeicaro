const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#FDFBFE]">
      <img
        src="/load.gif"
        alt="Carregando..."
        className="w-[120px] h-auto"
      />
    </div>
  );
};

export default Loader;
