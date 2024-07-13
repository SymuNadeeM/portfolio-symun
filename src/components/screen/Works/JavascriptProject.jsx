import { allProjectData } from "../../../data/allProjectData";
import ProjectPageStructure from "./ProjectPageStructure";

const JavascriptProject = () => {
  const javaScriptData = allProjectData.filter(
    (project) => project.type === "Javascript"
  );
  const halfLength = Math.ceil(javaScriptData.length / 2);
  return (
    <div>
      <ProjectPageStructure ProjectData={javaScriptData} halfLength={halfLength} />
    </div>
  );
};

export default JavascriptProject;