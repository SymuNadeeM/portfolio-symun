import Tabs from "../components/screen/Works/Tabs";
import TitleText from "../components/shared/TitleText";


const Work = () => {
  return (
    <section>
      <div className="mt-10 px-5 py-5 sm:px-10 sm:py-13 bg-white dark:bg-black rounded-[20px]">
        <TitleText title="Portfolio" />
        <Tabs />
      </div>
    </section>
  );
};

export default Work;