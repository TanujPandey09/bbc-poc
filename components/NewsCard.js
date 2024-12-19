import React from "react";

const NewsCard = ({ article }) => {
  const { title, time, category, description, image } = article;

  return (
    <div className="flex gap-4 border-b pb-4">
      {/* Optional Image */}
      {image && (
        <div className="flex-shrink-0 w-28 h-20">
          <img src={image} alt={title} className="object-cover w-full h-full rounded-md" />
        </div>
      )}
      
      {/* Content */}
      <div className="flex flex-col">
        <h3 className="font-semibold hover:underline cursor-pointer text-gray-900">{title}</h3>
        <span className="text-sm text-gray-500">
          {time} | {category}
        </span>
        {description && <p className="text-sm mt-1 text-gray-600">{description}</p>}
      </div>
    </div>
  );
};

export default NewsCard;
