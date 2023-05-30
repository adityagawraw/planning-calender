import React from "react";
import {CiSearch} from "react-icons/ci"

const Header = () => {
  return (
    <div className="flex justify-between items-center mt-8 mx-6 pb-3 border-b-2 ">
      <div className="flex gap-3">
        <p className={`text-gray-400 px-2 py-2`}> Project Planning</p>
        <p
          className={`text-gray-700 font-semibold px-2 py-2 rounded-lg bg-[#E5E8FF]`}
        >
          Weekly Planning
        </p>
        <p className={`text-gray-400 px-2 py-2`}>Planning Insights</p>
      </div>
      <div className="flex items-center gap-3 rounded-full shadow min-w-[300px] px-4 py-2">
        <CiSearch className="w-7 h-7 text-gray-500"/>
        <input
          type="text"
          placeholder="Search for projects"
          className="w-full outline-none placeholder:text-[16px]"
        />
      </div>
    </div>
  );
};

export default Header;
