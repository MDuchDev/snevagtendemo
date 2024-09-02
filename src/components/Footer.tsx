import MagicButton from "./ui/MagicButton";
import { socialMedia } from "@/data";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h2 className="heading lg:max-w-[45vw] text-white">
          Skal din {" "}<span className="text-purple">digitale</span> tilstedeværelse tages til det næste niveau?
        </h2>
        <p className="text-white-200 md:mt-10 my-5 text-center">
        Tag kontakt og lad os sammen kigge på hvordan vi kan hjælpe dig!
        </p>
        <a href="mailto:mikkel@rexduch.com">
          <MagicButton title="Send os en mail" icon={<MdOutlineMailOutline /> } position="right" />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal mb-8 sm:mb-0 font-light text-white-200">
          7400, Herning
          <br />
          Tlf: 30869192
          <br />
          Email: mikkel@rexduch.com
          <br />
          Copyright © 2024 Rexai
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 broder rounded-lg border-black-300">
              <a href={profile.link} target="_blank" rel="noopener noreferrer">
              <img src={profile.img} alt={profile.img} width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer;