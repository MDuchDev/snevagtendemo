"use client";

import React from "react";
import { BackgroundGradient } from "./ui/BackgroundGradiant";
import { FaLocationArrow } from "react-icons/fa6";

export function RecentCases() {
  return (
    <div>
      <div className="py-20 pt-40" id="cases">
        <h2 className="heading text-white">
          Vores {" "}
          <span className="text-purple">cases</span>
        </h2>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-20 gap-y-8 mt-10 text-white">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-black-100 sm:max-h-[32rem] h-[26rem] sm:h-[32rem] sm:min-w-[570px] w-[80vw]">
      <div className="flex items-center justify-center">
          <img src="/p1.jpg" alt="p1" className="z-10" />
        </div>
        <h2 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white mt-3 mb-2">
          Q&A chatbot til Snevagten.dk
        </h2>

        <p className="text-sm text-white">
          Multiagent-chatbot med værktøjer til at kunne agere som kundeservice ved at besvare kundernes spørgsmål, ved tilkobling til en vector database.
        </p>
        <div className="flex justify-end">
        <a target="_blank" rel="noopener noreferrer" href="https://snevagten.dk/">
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center bg-purple/40 mt-4 text-xs font-bold">
          <span className="text-base font-light flex items-center">
            Se website
            <FaLocationArrow className="ms-2 mr-2" />
        </span>
        </button>
        </a>
        </div>
      </BackgroundGradient>

      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-black-100 sm:max-h-[32rem] h-[26rem] sm:h-[32rem] sm:min-w-[570px] w-[80vw]">
        <div className="flex items-center justify-center">
          <img src="/p2.jpg" alt="p1" className="z-10" />
        </div>
        <h2 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white mt-3 mb-2">
            2000+ produktbeskrivelser for Flexa
        </h2>

        <p className="text-sm text-white">
            Python Script som har genereret og SEO-forbedret mere end 2000 produktbeskrivelser på mindre end 20 minutter.
        </p>
        <div className="flex justify-end">
        <a target="_blank" rel="noopener noreferrer" href="https://flexaworld.com/">
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center bg-purple/40 mt-4 text-xs font-bold">
          <span className="text-base font-light flex items-center">
            Se website
            <FaLocationArrow className="ms-2 mr-2" />
        </span>
        </button>
        </a>
        </div>
      </BackgroundGradient>

      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-black-100 sm:max-h-[32rem] h-[26rem] sm:h-[32rem] sm:min-w-[570px] w-[80vw]">
      <div className="flex items-center justify-center">
          <img src="/p4.jpg" alt="p1" className="z-10" />
        </div>
        <h2 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white mt-3 mb-2">
          Teknisk SEO for Leesign.dk
        </h2>

        <p className="text-sm text-white">
          Løbende teknisk analyse, optimering og rettelser Leesigns hjemmeside, for en hurtigere ydeevne og forbedret synlighed i søgemaskiner.
        </p>
        <div className="flex justify-end">
        <a target="_blank" rel="noopener noreferrer" href="https://leesign.dk/">
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center bg-purple/40 mt-4 text-xs font-bold">
          <span className="text-base font-light flex items-center">
            Se website
            <FaLocationArrow className="ms-2 mr-2" />
        </span>
        </button>
        </a>
        </div>
      </BackgroundGradient>

      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-black-100 sm:max-h-[32rem] h-[26rem] sm:h-[32rem] sm:min-w-[570px] w-[80vw]">
      <div className="flex items-center justify-center">
          <img src="/p3.jpg" alt="p1" className="z-10" />
        </div>
        <h2 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white mt-3 mb-2">
        Hold øje med konkurrenterne
        </h2>

        <p className="text-sm text-white">
        En custom webscraper til Flexa, som scanner hjemmesider efter valgte produkter. Med webscraperen gennemgik vi over 2600 hjemmesider.
        </p>
        <div className="flex justify-end">
        <a target="_blank" rel="noopener noreferrer" href="https://flexaworld.com/">
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center bg-purple/40 mt-4 text-xs font-bold">
          <span className="text-base font-light flex items-center">
            Se website
            <FaLocationArrow className="ms-2 mr-2" />
        </span>
        </button>
        </a>
        </div>
      </BackgroundGradient>
      </div>
      </div>
    </div>
  );
}
