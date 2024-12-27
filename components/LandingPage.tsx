"use client"
import TypingAnimation from "./ui/typing-animation";
import ShinyButton from "./ui/shiny-button";
import InteractiveHoverButton from "./ui/interactive-hover-button";

const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col  items-start justify-center  w-full ">
        <h1 className="text-5xl font-Oswald ">Hi I'm </h1>
        <h1 className=" text-5xl font-bold mt-5">Ansh Pachauri</h1>
        <br />
        <TypingAnimation children={"I am a Full Stack Web Developer"} 
        className="font-mono text-5xl"  duration={200} />
        <p className="mt-3 text-xl ">
        I am a passionate and dedicated freelance developer with a strong eagerness to learn and explore new technologiesevery day. As a freelancer, I have honed my skills by working on diverse projects that require innovativesolutions and efficient problem-solving. I thrive in dynamic environments where I can apply my expertise indevelopment to create impactful and user-centric applications.
        </p>
        <div className="flex gap-2 m-4">
          <ShinyButton>Get to know me</ShinyButton>
          <InteractiveHoverButton text="Projects"></InteractiveHoverButton>

        </div>
      </div>
    </>
  );
};

export default LandingPage;
