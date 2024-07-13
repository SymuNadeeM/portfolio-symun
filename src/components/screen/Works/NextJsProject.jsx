import { allProjectData } from "../../../data/allProjectData";
import ProjectPageStructure from "./ProjectPageStructure";
const NextJsProject = () => {
  const nextJsData = allProjectData.filter(
    (project) => project.type === "nextjs"
  );
  const halfLength = Math.ceil(nextJsData.length / 2);

  return (
    <div>
      <ProjectPageStructure ProjectData={nextJsData} halfLength={halfLength} />
    </div>
  );
};

export default NextJsProject;
