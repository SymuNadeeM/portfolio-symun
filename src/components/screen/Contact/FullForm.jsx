import { useState } from "react";
import FormInput from "./FormInput";

const FullForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }
    // If all fields are filled, you can proceed with form submission logic here.
    // For now, let's just log the form data.
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Reset form fields and error message after successful submission
    setName("");
    setEmail("");
    setMessage("");
    setError("");
  };

  return (
    <div className="mt-10 px-2 sm:px-11.5 py-15 bg-white dark:bg-grayBg shadow-lg rounded-[20px]">
      <form onSubmit={handleSubmit} className="space-y-10">
        <FormInput
          type="text"
          placeholder=""
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormInput
          type="email"
          placeholder=""
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          type="textarea"
          placeholder=""
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div>
          <button
             type="submit"
            className="relative px-5 py-2 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              Submit
            </span>
          </button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default FullForm;
