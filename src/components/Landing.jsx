import { BsChevronDoubleDown } from "react-icons/bs";

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0e0e0e]">
      <h1 className="text-[15vw] text-gradient font-bold">ZSYIHAB.</h1>
      <h3 className="text-[5vw]">WEB DEVELOPER</h3>
      <div className="absolute flex flex-col items-center justify-center mt-10 animate-pulse bottom-10">
        <h3 className="mb-3">Scroll Down</h3>
        <BsChevronDoubleDown className="text-4xl" />
      </div>
    </div>
  );
};

export default Landing;
