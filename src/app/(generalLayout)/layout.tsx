import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const GeneralLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto min-h-screen">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default GeneralLayout;
