
import { aboutData } from "../../../data/aboutPage";
import SubTitle from "../../shared/SubTitle";

const Interests = () => {
  return (
    <div className="mt-10">
      <SubTitle subtitle="My Interests" />
      <div className="flex flex-wrap justify-between items-center gap-y-4 sm:gap-y-0">
        {aboutData.interests.map((interest, index) => (
          <div key={index} className="flex items-center justify-center gap-2">
            <interest.icon size={20} className="text-white" />
            <p className="font-medium">{interest.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interests;
