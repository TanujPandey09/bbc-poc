import { ChevronRight } from "lucide-react";
import Image from "next/image";

const HeroContent = ({ buttonText, title, headline, src, poweredBy, logo }) => {
  return (
    <div className="mb-8 container mx-auto border md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center px-5">
        <div className="flex flex-col gap-3 px-5 md:px-10 mx-auto hover:underline cursor-pointer">
          {/* Title */}
          <h3 className="text-2xl font-semibold uppercase text-gray-700">
            {title}
          </h3>

          {/* Headline */}
          <h2 className="text-4xl font-bold">{headline}</h2>

          {/* Powered By */}
          {poweredBy && (
            <p className="text-sm text-gray-500 italic">
              Powered by <span className="font-semibold">{poweredBy}</span>
            </p>
          )}

          {/* Button */}
          <div className="flex items-center mt-3 gap-2">
            <button className="bg-black text-white uppercase items-center gap-2 p-3 border border-gray-300 rounded-full text-sm hover:bg-gray-50">
              {buttonText}
            </button>
            <Image
              width={60}
              height={60}
              alt="logo"
              src={logo}
              className="w-16 object-cover"
            />
          </div>
        </div>

        <div className="col-span-1">
          <Image
            width={600}
            height={300}
            src={src}
            alt={"Image"}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
