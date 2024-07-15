
const TitleText = ({title}) => {
  return (
    <div className="flex items-center gap-2 sm:gap-4 mb-3.5">
      <h2 className="text-2xl sm:text-3.5 capitalize inline-block text-black dark:text-white font-bold">
        {title}
      </h2>
      <div className="w-[120px] sm:w-[200px] h-[3px] rounded-md bg-gradient-to-r from-[#fa5252] to-[#dd2476]"></div>
    </div>
  );
};

export default TitleText;
