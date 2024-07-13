import { aboutData } from "../../../data/aboutPage";


const Achievement = () => {
  return (
    <div className="mt-10 flex flex-wrap sm:grid sm:grid-cols-3  gap-3">
      {aboutData.achievements.map((achievement, index) => (
        <div
          key={index}
          className="bg-grayBackground rounded-md p-4 flex flex-col justify-center items-center"
        >
          <h2 className="text-3xl font-semibold">{achievement.value}</h2>
          <p className="pt-2 text-sm uppercase text-center">
            {achievement.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Achievement;
