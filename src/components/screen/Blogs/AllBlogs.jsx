import blog1 from "../../../assets/blogs/lap.jpg";


const AllBlogs = () => {
  return (
    <div className="mt-10 w-full max-h-[320px] relative  overflow-hidden bg-cover bg-no-repeat rounded-xl">
      <img src={blog1} alt="blog" className="rounded-xl w-full h-full transition duration-300 ease-in-out hover:scale-110" />

      <div className="absolute top-5 left-5">
         <div className="px-3 py-2 rounded-full bg-gradient-to-l from-indigo-500 hover:bg-gradient-to-l hover:from-indigo-700 duration-500 text-white">
            <h5>Technology</h5>
         </div>      
      </div>
      <div className="absolute bottom-5 right-5 left-5">
           <div className="hover:bg-[#2A1454] bg-[#6a41b8] text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab ut nisi itaque at laudantium possimus, adipisci excepturi, nihil illum modi cupiditate debitis facilis consequatur recusandae, assumenda ipsum aspernatur voluptates sapiente?
           </div>
      </div>
    </div>
  );
};

export default AllBlogs;