import { Line } from "rc-progress";
import { GiSkills } from "react-icons/gi";
import SubTitle from "../../../components/shared/SubTitle";
import skillsData from "../../../data/skillData";

const SkillAndKnowledge = () => {
  return (
    <div className="mt-10">
      <div className="flex gap-2">
        <GiSkills size={32} className="text-[#dd2476]" />
        <SubTitle subtitle="Working Skills" />
      </div>
      <div className="sm:grid sm:grid-cols-2 gap-10">
        <div className="space-y-5">
          {skillsData.slice(0,4).map((skill, index) => (
            <div key={index}>
              <div className="mb-2 flex items-center justify-between">
                <h4 className="text-black dark:text-grayText font-medium">{skill.name}</h4>
                <h5 className="text-black dark:text-grayText font-medium">{skill.percent}%</h5>
              </div>
              <Line
                percent={skill.percent}
                strokeWidth={1.5}
                trailWidth={1.5}
                strokeColor="#41B06E"
              />
            </div>
          ))}
        </div>
        <div className="space-y-5">
          {skillsData.slice(4,7).map((skill, index) => (
            <div key={index}>
              <div className="mb-2 flex items-center justify-between">
                <h4 className="text-black dark:text-grayText font-medium">{skill.name}</h4>
                <h5 className="text-black dark:text-grayText font-medium">{skill.percent}%</h5>
              </div>
              <Line
                percent={skill.percent}
                strokeWidth={1.5}
                trailWidth={1.5}
                strokeColor="#41B06E"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillAndKnowledge;
