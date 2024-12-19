import React from "react";
import { ChevronRight } from "lucide-react";
import { FaPlay } from "react-icons/fa";

const NewsSection = ({ heading, items, type, variant }) => {
  return (
    <div
      className={`mb-8 pt-6 ${variant === "homepage" ? "border-t-2 border-black" : "border-y-2 border-black"
        } container`}
    >
      <div className="flex items-center gap-2 mb-5">
        <h2
          className={`text-2xl font-bold ${variant === "homepage" ? "text-black" : ""}`}
        >
          {heading}
        </h2>

        {variant === "homepage" && (
          <ChevronRight className="text-black hover:text-black cursor-pointer w-6 h-6 flex-shrink-0" />
        )}
      </div>


      {type === "mostWatched" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-4 py-2 mb-4">
          {items.map((item, index) => (
            <div key={index} className="flex gap-4 pt-4">

              <span className="text-4xl font-bold text-gray-400">{item.no}</span>


              <div className="flex flex-col gap-1">
                <div className="flex gap-2">
                  <FaPlay className="text-lg flex-shrink-0" />
                  <h3 className="font-normal text-lg hover:underline cursor-pointer">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}


      {type === "mostRead" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 py-2 mb-4">
          {items.map((item, index) => (
            <div key={index} className="flex gap-4">
              <span className="text-4xl font-bold text-gray-400">{item.no}</span>


              <h3 className="font-semibold text-lg hover:underline cursor-pointer">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      )}
      {variant === "homepage" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-5 gap-6">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col gap-2 p-4">
              <h3 className="font-semibold text-xl hover:underline cursor-pointer">
                {item.title}
              </h3>

              <div className="flex justify-between items-center h-8">
                <span className="text-gray-500">
                  {item.time} | {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsSection;
