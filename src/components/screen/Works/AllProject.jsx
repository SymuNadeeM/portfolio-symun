import { allProjectData } from "../../../data/allProjectData";
import ProjectPageStructure from "./ProjectPageStructure";

const AllProject = () => {
  const halfLength = Math.ceil(allProjectData.length / 2);
  return (
    <div>
      <ProjectPageStructure
        ProjectData={allProjectData}
        halfLength={halfLength}
      />
    </div>
  );
};

export default AllProject;
