import React from "react";
import Image from "next/image";

const NewsCard = ({ image, title, description, time, category, isLive }) => (
  <div className="mb-6 pb-10 border-b border-gray-600 hover:underline cursor-pointer">
    {image && (
      <Image
        width={400}
        height={300}
        src={image}
        alt={title}
        className="w-full mb-2"
      />
    )}
    {isLive && (
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-red-600 text-white px-2 py-1 rounded-sm text-sm">
          LIVE
        </span>
      </div>
    )}
    <h2 className={`text-lg md:text-xl font-bold mb-2 ${isLive ? "mt-0" : ""}`}>
      {title}
    </h2>
    {description && <p className="text-gray-600 mb-4">{description}</p>}
    {(time || category) && (
      <div className="text-sm text-gray-500">
        {time && <span>{time}</span>}
        {time && category && <span className="mx-2">|</span>}
        {category && <span>{category}</span>}
      </div>
    )}
  </div>
);

const MainStory = ({
  image,
  title,
  description,
  highlights,
  isLive,
  variant,
  time,
  category,
}) => {
  const commonContent = (
    <>
      {isLive && (
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-red-600 text-white px-2 py-1 rounded-sm text-sm">
            LIVE
          </span>
        </div>
      )}
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="text-gray-600 mb-4">{description}</p>
      {highlights && (
        <ul className="list-disc ml-6">
          {highlights.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      {(time || category) && (
        <div className="text-sm text-gray-500">
          {time && <span>{time}</span>}
          {time && category && <span className="mx-2">|</span>}
          {category && <span>{category}</span>}
        </div>
      )}
    </>
  );

  return variant === "news" ? (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:underline cursor-pointer my-4 border-b-2">
      <div className="col-span-12 md:col-span-4 flex flex-col">
        {commonContent}
      </div>
      <div className="col-span-12 md:col-span-8">
        <Image
          src={image}
          width={900}
          height={600}
          alt={title}
          className="w-full h-auto"
        />
      </div>
    </div>
  ) : (
    <div className="relative hover:underline cursor-pointer">
      <Image
        src={image}
        width={400}
        height={300}
        alt={title}
        className="w-full mb-2 rounded-md"
      />
      <div className="mt-4">{commonContent}</div>
    </div>
  );
};

const HeroSection = ({ variant, mainStory, data = [], title }) => (
  <div className="border-b-2 border-black py-2">
    <h4 className="text-xl font-bold">{title}</h4>
    {variant === "homepage" ? (
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-3">
          <NewsCard
            image="https://ichef.bbci.co.uk/news/1024/cpsprodpb/3e7b/live/09e5b580-bc41-11ef-aff0-072ce821b6ab.jpg.webp"
            title="Igor Kirillov: Russia's chemical weapons chief and mouthpiece killed in Moscow"
            description="Kirillov, who has been killed in Moscow, was accused by the West of overseeing the use of chemical weapons on the battlefield in Ukraine."
            time="10 mins ago"
            category="Europe"
          />
          <NewsCard
            image="https://ichef.bbci.co.uk/news/480/cpsprodpb/ba83/live/5239d240-bc63-11ef-a0f2-fd81ae5962f4.jpg.webp"
            title="'We thought it was a ball' - the bombs killing and maiming Indian children"
            description="Children in West Bengal are being maimed by unexploded bombs."
          />
        </div>
        <div className="md:col-span-6">
          <MainStory
            image="https://ichef.bbci.co.uk/ace/standard/800/cpsprodpb/fe0b/live/277d5090-bc59-11ef-aff0-072ce821b6ab.jpg.webp"
            title="Ukraine says it killed senior Russian general who died in scooter blast in Moscow"
            description="Lt Gen Igor Kirillov was charged yesterday in Ukraine for the use of chemical weapons, and was sanctioned by the UK in October."
            highlights={["General killed in Moscow a legitimate target, says Ukraine"]}
            isLive={true}
          />
        </div>
        <div className="md:col-span-3">
          {data.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-8">
          {mainStory && <MainStory {...mainStory} variant={variant} />}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {data.map((item, index) => (
              <NewsCard key={index} {...item} />
            ))}
          </div>
        </div>
        <div className="md:col-span-4">
          <NewsCard
            title="North Korean troops killed fighting Ukraine, says US"
            description="These would be the first reported casualties since North Korea sent troops to support Russia in October."
            time="23 mins ago"
            category="World"
          />
          <NewsCard
            title="When the Northern Lights was a tomato factory - and other heartwarming moments from 2024"
            description="We're bringing you 100 joyful, inspiring and uplifting stories during the festive season - and you can get involved."
            isLive={true}
          />
          <NewsCard
            title="New York judge rejects Trump's bid to dismiss hush money conviction"
            description="Trump argued the conviction should be tossed after the Supreme Court's ruling on presidential immunity."
            time="7 hrs ago"
            category="US & Canada"
          />
        </div>
      </div>
    )}
  </div>
);

export default HeroSection;
