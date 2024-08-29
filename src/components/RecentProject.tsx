import { projects } from "@/data";
import dynamic from "next/dynamic";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

const PinContainer = dynamic(
  () => import("./ui/3d-pin").then((mod) => mod.PinContainer),
  { ssr: false }
);

const RecentProjects = () => {
  return (
    <div className="py-20 pt-40" id="cases">
      <h1 className="heading text-white">
        Her er nogle af {" "}
        <span className="text-purple">vores cases</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10 text-white">
        {projects.map(({
          id,
          title,
          des,
          img,
          iconLists,
          link,
        }) => (
          <div key={id} className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] sm:h-[40vh] h-[30vh] overflow-hidden mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img src={img} alt={title} className="z-10 absolute bottom-0" />
              </div>
              <a href={link} target="_blank" rel="noopener noreferrer">
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
            
              <p className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2 text-blue-100">
                {des}
              </p>
              </a>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index * 2}px)`
                      }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <p className="flex lg:text-lg md:text-sm text-xs text-purple">
                    Se Website
                  </p>
                  </a>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
                  
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects;