import Button from "./Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectCard = ({ img, urlLive, urlGitHub, title, tags }) => {
  return (
    <div className="p-5 rounded-xl bg-[#1c1c1c] hover:scale-110 duration-300 border-gradient">
      <img src={img} className="rounded-lg" />
      <h1 className="pt-5 text-2xl font-bold text-gradient">{title}</h1>
      <h3 className="pt-1 pb-5 text-[#757575]">{tags}</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Button text="GitHub" icon={<BsGithub />} url={urlGitHub} />
        <Button text="Live Site" icon={<CgWebsite />} url={urlLive} />
      </div>
    </div>
  );
};

export default ProjectCard;
