import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Exo_2 } from "next/font/google";
import { cn } from "@/lib/utils";
import { MdOutlineMailOutline } from "react-icons/md";
import { navItems } from "@/data";
import MobileNav from "./MobileNav";

const exo2 = Exo_2({ subsets: ["latin"], weight: "700", });

const Navbar = async () => {
  return (
    <>
      <nav className="sticky h-16 top-0 z-40 w-full bg-black/30 backdrop-blur-lg transition-all shadow-md border-b border-blue-100 border-opacity-30">
          <MaxWidthWrapper>
            <div className="flex h-16 items-center justify-between">
              <Link href="/" className={cn("flex z-40 text-4xl text-white", exo2.className)}>
                Rexai
              </Link>
                

              {/* NavItems */}
              <ul className="hidden items-center md:space-x-4 space-x-3 sm:flex text-white font-semibold">
              {navItems.map((navItem: any, idx: number) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className={cn("relative dark:text-neutral-50 items-center flex space-x-1 text-white dark:hover:text-neutral-300 hover:text-neutral-500"
                  )}
                >
                  <span className="block sm:hidden">{navItem.icon}</span>
                  <span className="hidden sm:block text-base">{navItem.name}</span>
                </Link>
              ))}
              </ul>

              <div className="hidden items-center space-x-4 sm:flex">
                <a href="mailto:mikkel@rexduch.com">
                  <button className="relative inline-flex sm:h-10 h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 sm:px-5 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl space-x-2">
                      <p>Kontakt</p>
                      <MdOutlineMailOutline />
                    </span>
                  </button>
                </a>
              </div>

              <MobileNav />
            </div>
          </MaxWidthWrapper>
        </nav>
    </>
  )
}
  
export default Navbar;