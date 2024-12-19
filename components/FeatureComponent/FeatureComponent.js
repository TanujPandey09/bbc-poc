import Image from "next/image";
import { ChevronRight } from "lucide-react";

const FeatureComponent = ({ imageSrc, title, description, buttonText, imagePosition, fetaureHeading }) => {
  const imageOrder = imagePosition === "left" ? "order-1 md:col-span-8" : "order-2 md:col-span-8";
  const contentOrder = imagePosition === "left" ? "order-2 md:col-span-4" : "order-1 md:col-span-4";

  return (
    <div className="mb-10 border-t-2 border-black">
  
      <div className="flex items-center mb-6 pt-6">
        <h2 className="text-xl font-bold text-gray-800">{fetaureHeading}</h2>
        <ChevronRight className="w-6 h-6 text-gray-600 ml-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6 pb-8">
        
        <div className={`col-span-12 md:${imageOrder}`}>
          <Image
            src={imageSrc}
            alt={title}
            width={800}
            height={500}
            className="object-cover rounded-md w-full h-auto"
          />
        </div>

    
        <div className={`col-span-12 md:${contentOrder}`}>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold text-gray-800 hover:underline cursor-pointer">
              {title}
            </h3>
            <p className="text-gray-600">{description}</p>
            <button className="bg-white py-2 px-6 rounded hover:bg-blue-700 hover:text-white text-black self-start border border-black">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureComponent;
