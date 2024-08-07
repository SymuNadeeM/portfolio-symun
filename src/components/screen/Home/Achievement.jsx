import CountUp from "react-countup";
// import { aboutData } from "../../../data/aboutPage";

const Achievement = () => {
  return (
    <div className="mt-10 sm:grid sm:grid-cols-3  gap-3 space-y-4 sm:space-y-0">
      <div className="bg-[#315f6b] dark:bg-grayBackground  rounded-md p-4 flex flex-col justify-center items-center shadow-lg">
        <h2 className="text-3xl font-semibold text-white dark:text-grayText">
          <CountUp end={3} duration={1} />+
        </h2>
        <p className="pt-2 text-sm uppercase text-center text-white dark:text-grayText">
          Years of Experience
        </p>
      </div>
      <div className="bg-[#315f6b] dark:bg-grayBackground  rounded-md p-4 flex flex-col justify-center items-center shadow-lg">
        <h2 className="text-3xl font-semibold text-white dark:text-grayText">
          <CountUp end={30} duration={5} />+
        </h2>
        <p className="pt-2 text-sm uppercase text-center text-white dark:text-grayText">
          PROJECTS COMPLETED
        </p>
      </div>
      <div className="bg-[#315f6b] dark:bg-grayBackground  rounded-md p-4 flex flex-col justify-center items-center shadow-lg">
        <h2 className="text-3xl font-semibold text-white dark:text-grayText">
          <CountUp end={10} duration={3} />+
        </h2>
        <p className="pt-2 text-sm uppercase text-center text-white dark:text-grayText">
          HAPPY CLIENTS
        </p>
      </div>
    </div>
  );
};

export default Achievement;
