import { FaCalendarAlt, FaRegComments } from "react-icons/fa";
import blog1 from "../../../assets/blogs/lap.jpg";

const AllBlogs = () => {
  return (
    <div className="mt-10">
      <div className="w-full  relative">
        <img src={blog1} alt="blog" className="rounded-xl h-[240px] sm:h-[320px] w-full" />

        <div className="absolute top-4 left-4 sm:top-8 sm:left-8">
          <div className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-full bg-gradient-to-l from-indigo-500 hover:bg-gradient-to-l hover:from-indigo-700 duration-500 text-white">
            <h5 className="text-xs sm:text-base">Technology</h5>
          </div>
        </div>
        <div className="absolute right-4 left-4 bottom-4 sm:bottom-5 sm:right-8 sm:left-8">
          <div className="bg-[#2a1454] hover:bg-gradient-to-r hover:from-indigo-500 text-[#8750f7] hover:text-white duration-500 p-2.5 sm:p-4 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <FaCalendarAlt />
                <h5 className="text-xs sm:text-sm">May 10, 2024</h5>
              </div>
              <div className="flex items-center gap-1">
                <FaRegComments />
                <h5 className="text-xs sm:text-sm">No Comments</h5>
              </div>
            </div>
            <h2 className="mt-1.5 sm:mt-3 text-base sm:text-lg lg:text-2xl font-bold text-white">
              <a href="#">Digital Marketo to Their New Office.</a>
            </h2>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AllBlogs;
