import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Shinpei Ajiro possesses the unique ability to relive time loops,
        allowing him to uncover secrets, strategize,, and protect his loved ones.
      </p>

      <form className="max-w-2xl mx-auto">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input type="text" placeholder="Enter your name" required 
          className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"/>
          <input type="email" placeholder="Enter your email" required 
          className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"/>
        </div>
        <textarea rows="6" placeholder="Enter your message" required
        className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
