// Layout.js
import React from "react";
import Navbar from "./components/common/Navbar";
import SideBar from "./components/common/SideBar";



const Layout = ({ children }) => {

  return (
    <div className="flex w-full">
      <div className="w-[20vw]">
      <SideBar />

      </div>
      <div className="flex flex-col w-full">
      <Navbar />
        <div className="flex-1 p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
