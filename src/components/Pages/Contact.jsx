import React from 'react';

function Contact() {
  return (
    <div className="flex justify-center items-center flex-col mt-10 gap-10 px-4 ">
      <h1 className="w-60 font-bold rounded shadow-lg bg-purple-400 text-3xl text-center p-4 text-white">
        Contact
      </h1>

      <div className="w-full max-w-md  p-6 rounded-lg shadow-lg space-y-5">
        <div>
          <label className="block font-semibold text-lg mb-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className="w-full h-12 px-4 border-2 border-gray-400 rounded focus:outline-none focus:border-purple-500"
            type="text"
            placeholder="Enter your name..."
          />
        </div>

        <div>
          <label className="block font-semibold text-lg mb-2" htmlFor="email">
            Product
          </label>
          <input
            id="email"
            className="w-full h-12 px-4 border-2 border-gray-400 rounded focus:outline-none focus:border-purple-500"
            type="email"
            placeholder="Enter your Product..."
          />
        </div>

        <div>
          <label className="block font-semibold text-lg mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full h-32 px-4 py-2 border-2 border-gray-400 rounded resize-none focus:outline-none focus:border-purple-500"
            placeholder="Write your message..."
          />
        </div>

        <button className="w-full bg-purple-500 text-white py-3 font-bold rounded hover:bg-purple-600 transition duration-300">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Contact;
