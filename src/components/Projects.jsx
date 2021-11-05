import ProjectCard from "./ProjectCard";
import kappa from "../images/kappa.png";
import portfolio from "../images/portfolio.png";

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-[#0e0e0e] flex justify-center w-screen px-10"
    >
      <div className="w-[64rem] py-10 border-t">
        <h1 className="text-4xl font-bold pb-11 sm:text-6xl text-gradient">
          MY PROJECTS
        </h1>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <ProjectCard
            img={kappa}
            title="Kappa - Comic Recommender System"
            urlGitHub="https://github.com/teszerrakt/kappa-comic-recommender"
            urlLive="https://kappa.zsyihab.tech"
            tags="React, Flask, TailwindCSS"
          />
          <ProjectCard
            img={portfolio}
            title="Portfolio Website"
            urlGitHub="https://github.com/teszerrakt/my-portfolio"
            urlLive="https://zsyihab.tech"
            tags="React, TailwindCSS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
