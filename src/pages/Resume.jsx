import TitleText from "../components//shared/TitleText";
import Educations from "../components/screen/Resume/Educations";
import Experience from "../components/screen/Resume/Experience";
import Knowledge from "../components/screen/Resume/Knowledge";
import SkillAndKnowledge from "../components/screen/Resume/SkillAndKnowledge";

const Resume = () => {
  return (
    <section>
      <div className="mt-10 px-5 py-5 sm:px-10 sm:py-13 bg-black rounded-[20px]">
        <TitleText title="Resume" />
         <Experience />
         <Educations />
         <SkillAndKnowledge />
         <Knowledge />
      </div>
    </section>
  );
};

export default Resume;