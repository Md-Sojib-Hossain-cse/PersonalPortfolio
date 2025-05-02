import React from "react";

import Navbar from "@/components/shared/Navbar";

const GeneralLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default GeneralLayout;
