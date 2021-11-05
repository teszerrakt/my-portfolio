import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("initialState");
  const [message, setMessage] = useState("initialState");

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  };

  return (
    <div id="contact" className="bg-[#0e0e0e] flex justify-center px-10">
      <form
        netlify
        name="contact"
        className="flex flex-col w-[64rem] py-10 border-t"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl font-bold pb-11 sm:text-6xl text-gradient">
          Contact Me
        </h1>
        <div className="relative mb-4">
          <label htmlFor="name" className="text-xl">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-3 text-xl transition-colors duration-300 ease-in-out bg-[#1c1c1c] border border-[#757575] rounded outline-none focus:border-[#23a6d5] focus:ring-2 focus:ring-[#23d5ab]"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="text-xl">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-3 text-xl transition-colors duration-300 ease-in-out bg-[#1c1c1c] border border-[#757575] rounded outline-none focus:border-[#ee7752] focus:ring-2 focus:ring-[#e73c7e]"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="text-xl">
            Message
          </label>
          <textarea
            type="text"
            id="message"
            name="message"
            className="w-full px-3 py-3 text-xl transition-colors duration-300 ease-in-out bg-[#1c1c1c] border border-[#757575] rounded outline-none focus:border-[#23a6d5] focus:ring-2 focus:ring-[#23d5ab] resize-none"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="flex items-center justify-center px-10 py-3 text-xl duration-300 bg-transparent border-2 border-transparent rounded-lg cursor-pointer hover:border-white bg-gradient"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
