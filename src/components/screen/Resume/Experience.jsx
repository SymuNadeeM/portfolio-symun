import { MdOutlineWorkOutline } from "react-icons/md";
import SubTitle from "../../../components/shared/SubTitle";
import { experience } from "../../../data/experience";

const Experience = () => {
  return (
    <div>
      <div className="flex gap-2 mt-10">
        <MdOutlineWorkOutline size={32} className="text-[#dd2476]" />
        <SubTitle subtitle="Experience" />
      </div>
      <div className="grid md:grid-cols-2 gap-9">
        {experience.map((experience, index) => (
          <div
            key={index}
            className="px-5 pb-5 pt-6 border bg-wBlueBg dark:bg-transparent border-transparent shadow-md dark:border dark:border-borderRe hover:border-teal duration-300 rounded-[12px] space-y-2"
          >
            <span className="text-black dark:text-grayText">{experience.date}</span>
            <h4 className="text-lg text-black dark:text-white font-medium leading-6">
              {experience.title}
            </h4>
            <p className="text-orange dark:text-grayText">{experience.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
