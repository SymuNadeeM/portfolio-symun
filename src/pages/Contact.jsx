import FullForm from "../components/screen/Contact/FullForm";
import TitleText from "../components/shared/TitleText";


const Contact = () => {
  return (
    <section>
    <div className="mt-10 px-5 py-5 sm:px-10 sm:py-13 bg-white dark:bg-black rounded-[20px]">
      <TitleText title="Contact" />
      <FullForm />
    </div>
  </section>
  );
};

export default Contact;