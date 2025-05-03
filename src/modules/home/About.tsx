"use client";

import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { BiRadioCircleMarked } from "react-icons/bi";
import { MdTimer } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import SectionTitle from "@/components/ui/sectionTitle";
import AboutImg from "@/assets/arifulislam.png";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="about" className="mt-6">
      <SectionTitle heading="About Me"></SectionTitle>
      <div className="min-h-screen py-6 lg:py-8">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:basis-1/2 flex justify-center items-center">
            <div className="relative lg:top-12 lg:-left-8 xl:top-0 xl:left-0 w-3/4 md:w-2/3 mx-auto border rounded-lg border-[#4CAF50]">
              <Image
                height={200}
                width={200}
                src={AboutImg}
                alt="aboutImg"
                className="rounded-lg w-full hover:scale-110 duration-200 ease-linear object-cover bg-slate-600"
              />
              <div className="absolute -top-6 left-6 border-4 border-[#4CAF50] h-full w-full -z-10 rounded-lg"></div>
            </div>
          </div>
          <div className="lg:basis-1/2 w-full">
            <h3
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-xl md:text-2xl lg:text-3xl font-medium text-black dark:text-white"
            >
              Aspiring Web Developer
            </h3>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="py-3 text-sm lg:text-base text-black dark:text-white"
            >
              I’m MD SOJIB HOSSAIN, a Junior MERN Stack Developer with a passion
              for building dynamic and responsive web applications. Eager to
              apply my skills in real-world projects, I bring creativity,
              dedication, and a strong foundation in full-stack development.
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="py-2 md:py-3 lg:py-4 flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 md:items-center"
            >
              <div className="flex gap-2 md:gap-3 items-center">
                <div className="p-3 md:p-4 rounded-lg bg-green-100">
                  <BiRadioCircleMarked className="text-[#4CAF50] text-2xl md:text-3xl" />
                </div>
                <div>
                  <p className="text-lg lg:text-xl font-semibold text-[#4CAF50]">
                    10+
                  </p>
                  <h6 className="text-lg lg:text-xl font-medium">
                    Complete Project
                  </h6>
                </div>
              </div>
              <div className="flex gap-2 md:gap-3 items-center">
                <div className="p-3 md:p-4 rounded-lg bg-green-100">
                  <MdTimer className="text-[#4CAF50] text-2xl md:text-3xl" />
                </div>
                <div>
                  <p className="text-lg lg:text-xl font-semibold text-[#4CAF50]">
                    0+
                  </p>
                  <h6 className="text-lg lg:text-xl font-medium">
                    Year Of Experience
                  </h6>
                </div>
              </div>
            </div>
            <ul className="text-black dark:text-white text-sm lg:text-base mt-2 md:mt-3 lg:mt-4 mb-3 md:mb-4 lg:mb-6">
              <li
                data-aos="fade-up"
                // data-aos-delay="200"
                className="flex gap-2 items-center"
              >
                <IoCheckmarkDoneCircleSharp className="text-[#4CAF50]" />
                Hands-on experience with React, Node.js, Express, MongoDB.
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay="200"
                className="flex gap-2 items-center"
              >
                <IoCheckmarkDoneCircleSharp className="text-[#4CAF50]" />
                Built and deployed a few personal and group projects.
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay="200"
                className="flex gap-2 items-center"
              >
                <IoCheckmarkDoneCircleSharp className="text-[#4CAF50]" />
                Continuously learning and growing in web development.
              </li>
            </ul>
            <Button className="w-52 bg-[#4CAF50] dark:bg-[#4CAF50] text-white dark:text-white">
              <a
                href="https://drive.google.com/file/d/10x2tnv4gqGAuG0gZIXTAiqQYj3yj4NRy/view?usp=sharing"
                target="_blank"
                className="flex gap-2"
              >
                Check Out My CV <FaDownload />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
