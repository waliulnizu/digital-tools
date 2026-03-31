import React from "react";
import Banner from "../assets/banner.png";
import { CiPlay1 } from "react-icons/ci";
import { FaRegCircleDot } from "react-icons/fa6";
const HeroSection = () => {
  return (
    <>
      <div className="w-9/12 mx-auto my-24">
        <div className="flex gap-2 items-center">
          {/* left side */}
          <div className="flex items-center">
            <div>
            <p className="text-lg  font-semibold bg-linear-to-b from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                New AI tools available</p>
            <h1 className="text-7xl my-4 text-[#101727FF]">
                Supercharge Your Digital Workflow</h1>
            <p className="text-lg text-[#627382FF] mb-6">
              Access premium AI tools, design assets, templates, and
              productivity <br /> software—all in one place. Start creating faster
              today. Explore Products
            </p>
            <div className="flex gap-4 mt-4">
                <button className="btn btn-primary rounded-2xl">Explore Products</button>
                <button className="btn  rounded-2xl"> <CiPlay1 />Demo Video</button>
            </div>
            </div>
          </div>
          {/* right side  */}
          <div>
            <img src={Banner} alt="Banner" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
