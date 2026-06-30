import { PROJECTS } from "../Components/data";
import Overview from "../Components/ProjectOverView";
import TechStack from "../Components/ProjectTeckStack";
import ProjectFeatures from "../Components/ProjectFeatures";
import Architecture from "../Components/Architecture";
import Challenges from "../Components/Challenges";
import HeroProjectDetails from "../Components/HeroProjectDetails";
import { useParams } from "react-router-dom";

export default function ProjectPage() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === parseInt(id));

  return (
    <main className="bg-[#080808] min-h-screen text-white">
      <HeroProjectDetails project={project} />
      <Overview
        overview={project.overview}
        role={project.role}
        duration={project.duration}
        year={project.date}
        status={project.status}
      />
      {/* <TechStack stack={project.} /> */}
      <ProjectFeatures features={project.features} />
      <Architecture architecture={project.architecture} />
      <Challenges challenges={project.challenges} />
    </main>
  );
}
