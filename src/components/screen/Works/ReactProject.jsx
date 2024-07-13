import { allProjectData } from "../../../data/allProjectData";
import ProjectPageStructure from "./ProjectPageStructure";

const ReactProject = () => {
  const reactProjectData = allProjectData.filter(
    (allData) => allData.type === "react"
  );
  const halfLength = Math.ceil(reactProjectData.length / 2);
  return (
    <div>
      <ProjectPageStructure
        ProjectData={reactProjectData}
        halfLength={halfLength}
      />
    </div>
  );
};

export default ReactProject;
