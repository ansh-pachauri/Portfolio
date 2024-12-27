

"use client";

import { Label, TextInput, Textarea } from "flowbite-react";
import { HiMail } from "react-icons/hi";

export default function Contact() {
  return (
    <div className="flex h-[60vh]">
      {/* Left Section */}
      <div className="bg-black text-white w-1/2 flex flex-col justify-center items-start p-8">
        <h1 className="font-bold text-5xl mb-4">Contact Me</h1>
        <p className="text-xl mb-2">Feel free to reach out!</p>
        <p className="text-md">
          I’m available for freelance work and collaboration. Drop a message, and I’ll get back to you as soon as I can!
        </p>
      </div>

      {/* Right Section */}
      <div className="bg-white w-1/2 flex justify-center items-center p-8">
        <form className="w-full max-w-md">
          <div className="mb-4">
            <Label htmlFor="email" value="Your email" className="text-xl" />
            <TextInput
              id="email"
              type="email"
              icon={HiMail}
              placeholder="your email address"
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="comment" value="Comment" className="text-xl" />
            <Textarea
              id="comment"
              placeholder="Leave a comment..."
              required
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
