import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full bg-black-100 dark:bg-grid-white/[0.3] bg-grid-white/[0.3] flex items-center justify-center absolute top-0 left-0">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>

    <div className="flex justify-center relative my-20 z-10">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <h2 className="uppercase tracking-widest text-sm text-center text-blue-100 max-w-90">
          Fullstack udvikler, AI-integrationer og teknisk-SEO
        </h2>

        <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-6xl" words="Digitale visioner til problemfri brugeroplevelser" />
        <p className="text-center md:tracking-wider text-sm md:text-lg lg:text-xl text-blue-100 mt-1 md:pb-0 pb-4">
          Next.js, OpenAI, FlowiseAI
        </p>
        <a href="#cases">
          <MagicButton title="Tidligere cases" icon={<FaLocationArrow />} position="right" />
        </a>
      </div>
    </div>
    </div>
  );
}

export default Hero;