
const SubTitle = ({subtitle}) => {
  return (
    <div className="flex items-center gap-2 sm:gap-4 mb-7.5">
        <h3 className="text-lg sm:text-2xl text-white font-medium capitalize">
          {subtitle}
        </h3>
        <div className="w-[50px] sm:w-[80px] h-[1.8px] rounded-md bg-gradient-to-r from-[#fa5252] to-[#dd2476]"></div>
      </div>
  );
};

export default SubTitle;