import { aboutData } from "../../../data/aboutPage";


const Achievement = () => {
  return (
    <div className="mt-10 sm:grid sm:grid-cols-3  gap-3 space-y-4 sm:space-y-0">
      {aboutData.achievements.map((achievement, index) => (
        <div
          key={index}
          className="bg-[#315f6b] hover:bg-gradient-to-r hover:from-[#99def0] dark:bg-grayBackground rounded-md p-4 flex flex-col justify-center items-center shadow-lg"
        >
          <h2 className="text-3xl font-semibold text-white dark:text-grayText">{achievement.value}</h2>
          <p className="pt-2 text-sm uppercase text-center text-white dark:text-grayText">
            {achievement.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Achievement;
