import Image from "next/image";
import { ChevronRight } from "lucide-react";

const FeatureComponent = ({
  imageSrc,
  title,
  description,
  buttonText,
  imagePosition,
  featureHeading,
}) => {
  const isImageLeft = imagePosition === "left";

  return (
    <div className="mb-10 border-t-2 border-black">
      <div className="flex items-center mb-6 pt-6">
        <h2 className="text-2xl font-bold text-gray-800">{featureHeading}</h2> 
        <ChevronRight className="w-6 h-6 text-gray-600 ml-2" />
      </div>

      <div className={`flex flex-col md:flex-row items-center gap-6 pb-8 ${isImageLeft ? "flex-row" : "flex-row-reverse"}`}>
        {/* Image Section */}
        <div className="md:col-span-6 flex-shrink-0">
          <Image
            src={imageSrc}
            alt={title}
            width={800}
            height={500}
            className="object-cover rounded-md w-full h-auto"
          />
        </div>

        {/* Content Section */}
        <div className="md:col-span-6 flex-shrink-0">
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
