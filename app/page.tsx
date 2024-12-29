
import DevAnimation from "@/components/DevAnimation";
import  LandingPage from "@/components/LandingPage";
import { TechStack } from "@/components/TechStack";
import { Work } from "@/components/Work";
import Contact from "@/components/Contact";
import { DockDemo } from "@/components/DockDemo";
import { HomeDeck } from "@/components/HomeDeck";
export default function Home() {
  return (
    <main>
      <div className="h-full w-full">
      <div className="flex flex-row justify-center gap-x-4 sm:gap-x-[70px]  gap-y-4 items-center">
          <HomeDeck />
          <DockDemo />

          </div>
      <div className="flex p-12  justify-between h-screen">
        
      <LandingPage />
      <DevAnimation animationPath="animations/dev.json" width={500} height={500} />
    </div>
    <div>
      <TechStack />
      <Work/>
      <Contact/>
    </div>
    </div>
    </main>
    
  );
}
