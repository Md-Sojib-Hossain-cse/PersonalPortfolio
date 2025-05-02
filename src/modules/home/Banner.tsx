import BannerImg from "@/assets/banner.png";
import { Button } from "@/components/ui/button";
import MyRoles from "@/components/ui/myRoles";
import Image from "next/image";
import { FaDownload, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Banner = () => {
  return (
    <section className="min-h-[calc(100vh-76px)]">
      <div className="flex flex-col md:flex-row-reverse">
        <Image
          height={100}
          width={100}
          src={BannerImg}
          alt="BannerImage"
          className="rounded-lg w-full lg:basis-1/2"
          sizes="(max-width: 70px) 100vw, (max-width: 1200px) 50vw, 33vw"
        ></Image>
        <div className="lg:basis-1/2 w-full flex flex-col justify-center">
          <h3 className="text-base md:text-lg lg:text-xl font-medium text-black dark:text-white">
            Hi, Im
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black dark:text-white">
            MD SOJIB HOSSAIN
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl font-medium text-[#4CAF50]">
            <MyRoles></MyRoles>
          </p>
          <p className="py-3 text-black dark:text-white">
            Hi, Im MD SOJIB HOSSAIN, a creative Junior MERN Stack Developer. I
            love turning ideas into seamless web experiences using the power of
            React, Node.js, Express, and MongoDB. Lets build something amazing
            together!
          </p>
          <div className="flex gap-2 lg:gap-3 pb-2 mb-2 md:mb-4">
            <a
              href="https://github.com/Md-Sojib-Hossain-cse"
              target="_blank"
              className="text-lg lg:text-xl"
            >
              <FaGithub className="hover:text-[#4CAF50]" />
            </a>
            <a
              href="https://www.linkedin.com/in/md-sojib-hossain-059a6b230"
              target="_blank"
              className="text-lg lg:text-xl"
            >
              <FaLinkedin className="hover:text-[#4CAF50]" />
            </a>
            <a
              href="https://x.com/MDSOJIBHOS22770"
              target="_blank"
              className="text-lg lg:text-xl"
            >
              <FaTwitter className="hover:text-[#4CAF50]" />
            </a>
            <a
              href="https://mail.google.com/mail/u/0/?fs=1&to=sojibhossain.cse@gmail.com&tf=cm"
              target="_blank"
              className="text-lg lg:text-xl"
            >
              <MdEmail className="hover:text-[#4CAF50]" />
            </a>
          </div>
          <Button className="w-52">
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
    </section>
  );
};

export default Banner;
