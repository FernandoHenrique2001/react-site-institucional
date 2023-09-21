"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import apple from "../public/apple.webp";

export default function Find() {
  return (
    <div className="flex flex-col bg-black">
      <Navbar />
      <div
        className="w-full h-screen text-white flex justify-center items-start flex-col bg-fixed opacity-40 bg-center bg-cover"
        id="banner"
        style={{ height: "100vh", width: "100%" }}
      >
        <h1 className="text-white z-10 text-6xl ml-8 -mt-48">
          Fernando Henrique
        </h1>
        <h2 className="text-white z-10 text-base ml-8">
          ESPECIALISTAS EM DESENVOLVIMENTO DE SOFTWARE
        </h2>
      </div>

      <div className="w-full bg-gray-200 h-screen pt-16" id="services">
        <div className="w-full flex items-center flex-col">
          <h1 className="text-6xl">Serviços</h1>
          <div className="mt-10 w-10 h-2 bg-purple-800"></div>
          <div className="flex justify-center w-full flex-row gap-20 mt-10">
            <Services url={apple} />
            <Services url={apple} />
            <Services url={apple} />
          </div>
        </div>
      </div>

      <div className="w-full h-100 bg-purple-800 pt-16" id="portfolio">
        <div className="w-full flex items-center flex-col pb-16 bg-purple-800">
          <h1 className="text-6xl">Portifólio</h1>
          <div className="flex-shrink w-50 h-2 bg-purple-800"></div>

          <div className="grid grid-cols-3 justify-center flex-row gap-20 mt-10">
            <Portfolio url={apple} />
            <Portfolio url={apple} />
            <Portfolio url={apple} />
            <Portfolio url={apple} />
            <Portfolio url={apple} />
            <Portfolio url={apple} />
          </div>
        </div>
      </div>

      <div className="h-85vh bg-white p-12" id="about">
        <div className="h-50vh py-12 px-4 md:px-24 flex flex-col items-center pb-16 bg-white">
          <div className="flex flex-col items-center justify-center py-12 h-50vh gap-8 bg-purple-800 text-white">
            <h1>Quem sou</h1>
            <div className="flex-shrink w-50 h-2 bg-purple-800"></div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
