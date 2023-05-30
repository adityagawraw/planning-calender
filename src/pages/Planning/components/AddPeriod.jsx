import React from "react";
import { BsCheck2 } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { RiDeleteBin7Line } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";

const AddPeriod = () => {
  return (
    <div className="max-w-[500px] px-7 py-6 rounded-lg shadow">
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold">Add Period</p>
        <RxCross2 className="w-5 h-5" />
      </div>

      <p className="text-[15px] font-semibold mt-5">Period Name</p>
      <input
        type="text"
        placeholder="Enter Period Name"
        className="mt-1 w-full outline-none border border-gray-400 rounded-lg px-4 py-3"
      />
      <div className="flex justify-between">
        <div>
          <p className="text-[15px] font-semibold mt-5">Start Time</p>
          <input
            type="time"
            placeholder="Enter Period Name"
            className="mt-1 min-w-[200px] w-full outline-none border border-gray-400 rounded-lg px-4 py-3"
          />
        </div>
        <div>
          <p className="text-[15px] font-semibold mt-5">End Time</p>
          <input
            type="time"
            placeholder="Enter Period Name"
            className="mt-1 min-w-[200px] w-full outline-none border border-gray-400 rounded-lg px-4 py-3"
          />
        </div>
      </div>
      <p className="text-[15px] font-semibold mt-5">Repeat on days</p>
      <div className="flex mt-2 gap-2">
        <button className={`bg-[#DCDCDC] text-gray-700 px-3 py-1 rounded-full`}>
          S
        </button>
        <button
          className={`bg-[#DCDCDC] text-gray-700 px-[9px] py-1 rounded-full`}
        >
          M
        </button>
        <button className={`bg-[#5364FF] text-white px-3 py-1 rounded-full`}>
          T
        </button>
        <button className={`bg-[#DCDCDC] text-gray-700 px-2 rounded-full`}>
          W
        </button>
        <button className={`bg-[#DCDCDC] text-gray-700 px-3 py-1 rounded-full`}>
          T
        </button>
        <button className={`bg-[#5364FF] text-white  px-3 py-1 rounded-full`}>
          F
        </button>
        <button className={`bg-[#DCDCDC] text-gray-700 px-3 py-1 rounded-full`}>
          S
        </button>
      </div>
      <p className="text-[15px] font-semibold mt-5">From</p>
      <input
        type="Date"
        placeholder="Enter Period Name"
        className="mt-1 min-w-[200px] w-full outline-none border border-gray-400 rounded-lg px-4 py-3"
      />
      <div className="mt-9 flex justify-between items-center">
        <div className="flex gap-3">
          <button className={`bg-[#F8EBF1] px-1 py-1 rounded-full`}>
            <BsCheck2 />
          </button>
          <button className={`bg-[#E9E8FD] px-1 py-1 rounded-full`}>
            <BsCheck2 className="text-[#E9E8FD]" />
          </button>
          <button className={`bg-[#FFFBDA] px-1 py-1 rounded-full`}>
            <BsCheck2 className="text-[#FFFBDA]" />
          </button>
          <button className={`bg-[#CFFFF1] px-1 py-1 rounded-full`}>
            <BsCheck2 className="text-[#CFFFF1]" />
          </button>
        </div>
        <div className="flex gap-2">
          <button>
            <RiDeleteBin7Line className="text-gray-500 w-5 h-5" />
          </button>
          <button className="bg-[#5364FF] text-white flex gap-2 items-center px-5 py-2 rounded-full">
            <div className="px-1 py-1 rounded  border border-white">
              <AiOutlinePlus className="w-3 h-3"/>
            </div>{" "}
            <span>Add Period</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPeriod;
