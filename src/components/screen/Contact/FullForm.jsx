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
            className="relative inline-flex items-center justify-center w-28 h-12 p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-pickPrimary rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-pickPrimary group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-pickPrimary transition-all duration-300 transform group-hover:translate-x-full ease">
              Send
            </span>
            <span className="relative invisible"></span>
          </button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default FullForm;
