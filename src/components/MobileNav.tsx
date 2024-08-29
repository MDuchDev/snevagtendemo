"use client";

import { navItems } from '@/data';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { MdOutlineMailOutline } from 'react-icons/md';

const MobileNav = () => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement | null>(null);
  
    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, []);

    const toggleOpen = () => setOpen((prev) => !prev);

    useEffect(() => {
        if (isOpen) toggleOpen();
    }, []);
  
    return (
        <div className='sm:hidden' ref={ref}>
            <IoIosMenu
                onClick={toggleOpen}
                className="relative z-50 h-10 w-10 text-white mr-8 cursor-pointer"
            />
            {isOpen && (
                <div className="fixed animate-in slide-in-from-top-5 fade-in-20 inset-0 z-0 w-full">
                    <ul className="absolute bg-black backdrop-blur-lg transition-all border-b border-zinc-200 shadow-xl grid w-full gap-3 px-10 pt-20 pb-4 rounded-xl">
                        {navItems.map((navItem: any, idx: number) => (
                            <li key={`link=${idx}`}>
                                <Link
                                    onClick={toggleOpen}
                                    className="flex items-center w-full text-white text-lg tracking-wider"
                                    href={navItem.link}
                                >
                                    {navItem.name}
                                </Link>
                            </li>
                        ))}  
                        <div className='flex items-center justify-end'>
                        <a href="mailto:mikkel@rexduch.com">
                  <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-base font-medium text-white backdrop-blur-3xl space-x-2">
                      <p>Kontakt</p>
                      <MdOutlineMailOutline />
                    </span>
                  </button>
                </a>
                        </div>
                    </ul>
                </div>
            )}
        </div>
    );
}
  
export default MobileNav;