"use client"
import TypingAnimation from "./ui/typing-animation";
import InteractiveHoverButton from "./ui/interactive-hover-button";
import Link from "next/link";

const LandingPage = () => {



  return (
    <>
      <div className="flex flex-col  items-start justify-center  w-full ">
        <h1 className="text-5xl font-Oswald ">Hi I&#39;m</h1>
        <h1 className=" text-5xl font-bold mt-5">Ansh Pachauri</h1>
        <br />
        <TypingAnimation className="font-mono text-5xl" duration={200}>
          I am a Full Stack Web Developer
        </TypingAnimation>
        <p className="mt-3 text-xl ">
             I build Websites.
        </p>
        <div className="flex gap-2 m-4">
          <Link href="#work">
          <InteractiveHoverButton text="Projects" ></InteractiveHoverButton>
          </Link>

        </div>
      </div>
    </>
  );
};

export default LandingPage;
