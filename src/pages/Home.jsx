
import Achievement from "../components/screen/Home/Achievement";
import Experience from "../components/screen/Home/Experience";
import Interests from "../components/screen/Home/Interests";
import TitleText from "../components/shared/TitleText";
import { aboutData } from "../data/aboutPage";

const Home = () => {
  

  
  return (
    <section>
      <div className="mt-10 px-5 py-5 sm:px-10 sm:py-13 bg-white  dark:bg-black rounded-[20px]">
        <TitleText title={aboutData.about.title} />

        {aboutData.about.description.map((paragraph, index) => (
          <p key={index} className="w-full tracking-tight leading-7 text-border_Sub dark:text-grayText">
            {paragraph}
          </p>
        ))}
        <Achievement />
        <Experience />
        <Interests />
      </div>
    </section>
  );
};

export default Home;