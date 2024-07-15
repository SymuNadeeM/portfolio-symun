import { aboutData } from "../../../data/aboutPage";
import SubTitle from "../../shared/SubTitle";


const Experience = () => {
  return (
    <div className="mt-10">
      <SubTitle subtitle="Experience" />

      {aboutData.experiences.map((experience) => (
        <div
          key={experience.id}
          className="space-y-2 bg-wPurBg dark:bg-grayBackground p-5 rounded shadow-md"
        >
          <div className="flex justify-between text-center">
            <h4 className="text-wDarkBlueBg dark:text-orange font-semibold">{experience.year}</h4>
            <p className="font-medium text-teal dark:text-tealColor">- {experience.company}</p>
          </div>
          <h3 className="sm:text-xl text-black dark:text-white">{experience.title}</h3>
          <p className="text-sm text-border_Sub dark:text-grayText">{experience.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
