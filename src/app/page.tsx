"use client";

import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Prices from "@/components/Prices";
import RecentProjects from "@/components/RecentProject";

const LandingPage = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <RecentProjects />
        <Experience />
        <Approach />
        <Prices />
        <Footer />
      </div>
    </main>
  );
}

export default LandingPage;