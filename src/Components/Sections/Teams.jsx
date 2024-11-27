
import Stay from "../../assets/images/illustration-stay-productive.png";
import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";
const Teams = () => {
  
  return (
    <div id="team" className="flex items-center max-md:flex-col max-md:gap-5 max-md:px-5 justify-center gap-x-10 w-full">
      <img src={Stay} alt="stay" className="w-[500px]" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-white">
          Stay Productive, <br /> wherever you are
        </h1>
        <span className="text-sm text-white">
          Never let location be an issue when accessing your files. Fylo has you{" "}
          <br />
          covered for all of your file storage needs. <br />
          <br />
          Securely share files and folders with friends, family and colleagues
          for live <br /> collaboration. No email attachments required.
        </span>
        <span className="transition-all text-accent-cyan underline hover:text-white flex items-center gap-2 text-sm cursor-pointer">
          See how Fylo works <ArrowRightCircleIcon className="w-4 h-4" />{" "}
        </span>
      </div>
    </div>
  );
};

export default Teams;
