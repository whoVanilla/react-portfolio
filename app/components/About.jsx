import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About the anime</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            Summer Time Rendering tells the story of Shinpei Ajiro, who
            returns to his peaceful island hometown for a funeral. However, he
            soon discovers sinister mysteries involving deadly doppelgängers,
            time loops, and a relentless fight to protect his loved ones.
          </p>
          <ul>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
