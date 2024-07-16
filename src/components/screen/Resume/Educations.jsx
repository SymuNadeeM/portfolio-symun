import { MdOutlineCastForEducation } from "react-icons/md";
import SubTitle from "../../../components//shared/SubTitle";
import { education } from "../../../data/education";

const Educations = () => {
  return (
    <div className="mt-10">
      <div className="flex gap-2">
        <MdOutlineCastForEducation size={32} className="text-[#dd2476]" />
        <SubTitle subtitle="Education" />
      </div>
      <div className="grid md:grid-cols-2 gap-9">
        {education.map((education, index) => (
          <div
            key={index}
            className="px-5 pb-5 pt-6 bg-wBlueBg dark:bg-transparent border border-transparent shadow-md dark:border dark:border-borderRe hover:border-teal duration-300 rounded-[12px] space-y-2"
          >
            <span className="text-black dark:text-grayText" >{education.year}</span>
            <h4 className="text-lg text-black dark:text-white font-medium leading-6">
              {education.title}
            </h4>
            <p className="text-orange dark:text-grayText">{education.institute}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Educations;
