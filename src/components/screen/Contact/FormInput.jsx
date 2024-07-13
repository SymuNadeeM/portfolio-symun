// FormInput.js

const FormInput = ({ type, placeholder, label }) => {
  return (
    <div className="relative w-full min-w-[200px]">
      {type === 'textarea' ? (
        <textarea
          rows="3"
          placeholder={placeholder}
          className="peer w-full border-b border-blue-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-400 focus:border-blue-700 focus:outline-0 disabled:border-0 disabled:bg-blue-50 placeholder:opacity-0 focus:placeholder:opacity-100"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="peer  w-full border-b border-blue-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-400 focus:border-blue-700 focus:outline-0 disabled:border-0 disabled:bg-blue-50 placeholder:opacity-0 focus:placeholder:opacity-100"
        />
      )}
      <label className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-purple-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-500 peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-green-600 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-500">
        {label} <span className="text-blue-500 pl-1"> *</span>
      </label>
    </div>
  );
};

export default FormInput;
