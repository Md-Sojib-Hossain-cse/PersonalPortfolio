"use client";

import { Typewriter } from "react-simple-typewriter";

const MyRoles = () => {
  return (
    <Typewriter
      words={[
        "MERN Stack Developer",
        "Frontend Developer",
        "Software Developer",
        "React Developer",
      ]}
      loop={Infinity}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  );
};

export default MyRoles;
