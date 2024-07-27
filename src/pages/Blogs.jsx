import AllBlogs from "../components/screen/Blogs/AllBlogs";
import TitleText from "../components/shared/TitleText";


const Blogs = () => {
  return (
    <section>
      <div className="mt-10 px-5 py-5 sm:px-10 sm:py-13 bg-white dark:bg-black rounded-[20px]">
        <TitleText title="My Blogs" />
        <AllBlogs />
      </div>
    </section>
  );
};

export default Blogs;