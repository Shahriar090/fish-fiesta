"use client";
import bannerImg from "@/assets/banner.png";

import Image from "next/image";
const Banner = () => {
  return (
    <section
      id="banner"
      className="pt-16 lg:pt-40 w-full max-w-screen-2xl mx-auto"
    >
      <div className="relative w-full h-screen">
        <Image
          src={bannerImg}
          layout="fill"
          objectFit="cover"
          alt="Hero Banner"
        />
        <div className="overlay absolute  inset-0 bg-black bg-opacity-70"></div>

        <div className="content absolute top-[35%] lg:left-[30%]">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-medium text-center">
            Welcome To Fish Fiesta
          </h1>
          <p className="font-semibold text-gray-200 max-w-xl mx-auto text-center py-4">
            Here you can find all kinds of fresh fish from all over Bangladesh.
            We have a variety of fish from the sea to canals. Our main goal is
            to ensure the quality of every item we serve.
          </p>

          <div className="flex justify-center">
            <button className="px-8 py-2 bg-[#FFBB38] text-black border-0 rounded-sm font-medium">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
