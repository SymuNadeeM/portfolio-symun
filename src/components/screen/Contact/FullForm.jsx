
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
        <div className="">
        
          <button
            type="submit"
            className="w-[133px] h-[50px] border-[2px] border-border_Sub hover:border-white bg-transparent button_sub text-black dark:text-white rounded-xl"
          >
            Submit
          </button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default FullForm;
