
import { useState } from "react";
import AllProject from "./AllProject";
import JavascriptProject from "./JavascriptProject";
import NextJsProject from "./NextJsProject";
import ReactProject from "./ReactProject";



const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabsData = [
    {
      title: "All",
      content: <AllProject />,
    },
    {
      title: "Next.js",
      content: <NextJsProject />,
    },
    {
      title: "React",
      content: <ReactProject />,
    },
    {
      title: "JavaScript",
      content: <JavascriptProject />,
    },
  ];

  return (
    <div>
      <div className="my-8 flex  sm:justify-end">
        {tabsData.map((tab, index) => (
          <div
            key={index}
            className={`px-2 sm:px-[18px] font-medium rounded relative  hover:text-teal cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] ${
              activeTab === index ? "text-activeColor" : ""
            }`}
            onClick={() => {
              console.log("Clicked tab index:", index);
              setActiveTab(index);
            }}
          >
            {tab.title}
          </div>
        ))}
      </div>

      <div>{tabsData[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
