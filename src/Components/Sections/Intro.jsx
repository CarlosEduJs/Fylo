import IntroImg from "../../assets/images/illustration-intro.png";
import ButtonDefault from "../Buttons/ButtonDefault";

const Intro = () => {
  return (
    <div className="flex flex-col items-center gap-4 w-full max-sm:px-5 bg-cover bg-center bg-no-repeat">
      <img src={IntroImg} className="w-[400px]" alt="introimg" />
      <h1 className="text-3xl text-white text-center font-bold ">
        All you files in one secure location, <br /> acessible anywhere.
      </h1>
      <span className="text-[14px] text-gray-300 text-center font-normal">
        Fylo stories all your most important files in one secure location. <br /> Acess
        them wherever you need, share and colloborate with <br /> friends family, and
        co-workers.
      </span>
      <ButtonDefault content={"Get Started"} />
    </div>
  );
};

export default Intro;
