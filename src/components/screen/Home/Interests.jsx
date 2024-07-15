
import { aboutData } from "../../../data/aboutPage";
import SubTitle from "../../shared/SubTitle";

const Interests = () => {
  return (
    <div className="mt-10">
      <SubTitle subtitle="My Interests" />
      <div className="flex flex-wrap justify-between items-center gap-y-4 sm:gap-y-0">
        {aboutData.interests.map((interest, index) => (
          <div key={index} className="flex items-center justify-center gap-2">
            <interest.icon size={20} className={`dark:text-white text-${interest.color}`}  />
            <p className="font-medium text-black dark:text-grayText">{interest.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interests;
