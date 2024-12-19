import React from "react";
import NewsCard from "../NewsCard";

const NewsSection = ({ title, articles }) => {
  return (
    <div className="border-t-2 border-black">
      {/* Section Title */}
      <h2 className="text-xl font-bold py-2 mb-2 border-t-4 border-black">{title} &rarr;</h2>
      
      {/* News Articles */}
      <div className="flex flex-col gap-4">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
