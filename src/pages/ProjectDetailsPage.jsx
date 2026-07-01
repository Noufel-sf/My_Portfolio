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

  if (!project) {
    return (
      <main className="bg-[#080808] min-h-screen text-white flex items-center justify-center px-6">
        <div className="max-w-lg text-center space-y-4">
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-neutral-500">
            Project not found
          </p>
          <h1 className="text-4xl font-black tracking-tight">
            The project you requested does not exist.
          </h1>
          <p className="text-neutral-400 leading-7">
            Go back to the projects page and choose another case study.
          </p>
        </div>
      </main>
    );
  }

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
      <TechStack tech={project.tech} />
      <ProjectFeatures features={project.features} />
      <Architecture architecture={project.architecture} />
      <Challenges challenges={project.challenges}
      lessons={project.learnings} />
    </main>
  );
}
