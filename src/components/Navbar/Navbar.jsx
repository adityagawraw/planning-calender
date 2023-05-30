import React from "react";
import { BsFillCaretDownFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-8 py-4 shadow-lg">
      <div>
        <div className="flex gap-2 items-center">
          <p className="text-lg font-semibold">Educator</p>{" "}
          <BsFillCaretDownFill className="w-3 h-3 mt-1" />
        </div>
        <p className="text-gray-500 text-sm">Arthshala</p>
      </div>
      <div className="flex gap-8">
        <div
          className={`w-fit pb-1 flex gap-3 items-center border-b-2 border-[#5364FF]`}
        >
          <img src="/images/planning.png" alt="" />
          <span>Planning</span>
        </div>
        <div className={`w-fit pb-1 flex gap-3 items-center `}>
          <img src="/images/house.png" alt="" />
          <span>Documentation</span>
        </div>
        <div className={`w-fit pb-1 flex gap-3 items-center `}>
          <img src="/images/doc.png" alt="" />
          <span>Housekeeping</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <img src="/images/search.png" alt="" className="w-5 h-5"/>
        <img src="/images/notif.png" alt="" className="w-5 h-5" />
        <div className="flex items-center gap-1">
        <img src="/images/user.png" alt="" className="w-8 h-8"/>
        <BsFillCaretDownFill className="w-3 h-3 mt-1" />
        </div>
       
      </div>
    </div>
  );
};

export default Navbar;
