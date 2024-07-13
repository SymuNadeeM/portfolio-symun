import { GiGiftOfKnowledge } from "react-icons/gi";
import SubTitle from "../../../components/shared/SubTitle";
import { knowledgeItems } from "../../../data/knowledgeItems";

const Knowledge = () => {
  return (
    <div className="mt-10">
      <div className="flex gap-2">
        <GiGiftOfKnowledge size={32} className="text-[#dd2476]" />
        <SubTitle subtitle="Knowledge" />
      </div>
      <div className="flex flex-wrap gap-x-3 gap-y-5">
        {knowledgeItems.map((item, index) => (
          <div
            key={index}
            className="relative px-5 py-2 overflow-hidden font-medium bg-knowColor border border-knowColor rounded-lg shadow-inner group"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Knowledge;
