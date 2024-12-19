import HeroSection from "../components/HeroSection/HeroSection";
import TwoColumnSection from "@/components/TwoColumnSection/TwoColumnSection";
import HeroContent from "@/components/HeroContent/HeroContent";
import FeatureLayout from "@/components/FeatureComponent";
import NewSlider from "@/components/NewsCarousle/NewSlider";
import NewsGrid from "@/components/NewsGrid/NewsGird";

import NewsSection from "@/components/NewsSection";
export default function Home() {

  const heroData = [{
    title: "Securing the Future of Enterprise AI",
    headline: "User-Friendly Gen AI",
    buttonText: "DiscoverMore",
    src: "https://tpc.googlesyndication.com/simgad/1456556633812311848?",
    poweredBy: "Paid & Presented By",
    logo: "https://tpc.googlesyndication.com/simgad/10372495679656503900?"

  }

  ]

  const homepageData = [
    {
      title: "US Supreme Court to hear TikTok challenge to potential ban",
      description: "The US wants the app to be sold or banned because of what it says are links to the Chinese state.",
      time: "3 hrs ago",
      category: "Technology",
      link: "https://www.bbc.com/news/articles/cn4xw9lx02xo",
      // image: "https://tpc.googlesyndication.com/simgad/1456556633812311848?",
    },
    {
      title: "House Ethics Committee votes to release Matt Gaetz report",
      description: "The report follows a years-long investigation into allegations of sexual misconduct and illicit drug use, which Gaetz denies.",
      time: "20 mins ago",
      category: "US | Canda",
     
      link: "https://www.bbc.com/news/articles/cj30l3kxmrno"
    },
    {
      title: "Four paths Trudeau can take as political crisis deepens",
      description: "A shock high-profile resignation has forced Canada's prime minister to contend with his plummeting popularity.",
      time: "30 mins ago",
      category: "US & Canada",

      link: "https://www.bbc.com/news/articles/cj30l3kxmrno"
    },
   
  ];


  const moreNewsData = {
    heading: "More news",
    items: [
      { title: "Buildings flattened as 7.3 magnitude earthquake hits Vanuatu", time: "7 hrs ago", category: "Asia" },
      { title: "Buildings flattened as 7.3 magnitude earthquake hits Vanuatu", time: "7 hrs ago", category: "Asia" },
      { title: "Buildings flattened as 7.3 magnitude earthquake hits Vanuatu", time: "7 hrs ago", category: "Asia" },
      { title: "Married couple among 11 Indians killed in Georgia gas poisoning", time: "3 hrs ago", category: "World" },
      { title: "Sara Sharif's father and stepmother jailed for life for her murder", time: "3 hrs ago", category: "Crime" },
    ],
  };


  const mainStory = {
    title: "US Supreme Court to hear TikTok challenge to potential ban",
    description: "The US wants the app to be sold or banned because of what it says are links to the Chinese state.",
    time: "3 hrs ago",
    category: "Technology",
    image: "https://tpc.googlesyndication.com/simgad/1456556633812311848?",
    isLive: true,
  };

  const data = [
    {
      image: "https://ichef.bbci.co.uk/images/ic/raw/p0k21mvc.jpg.webp",
      title: "Download the BBC app",
      description: "Click here to download the BBC app for Apple and Android devices.",
    },
    {
      image: "https://ichef.bbci.co.uk/images/ic/raw/p0jq6tfl.jpg.webp",
      title: "World of Business",
      description:
        "Gain the leading edge with global insights for the boardroom and beyond, in your inbox every Wednesday.",
    },
    {
      image: "https://ichef.bbci.co.uk/images/ic/raw/p0jq6tfl.jpg.webp",
      title: "Listen to The Global Story",
      description:
        "Global perspectives on one big story. In-depth insights from the BBC, the world's most trusted international news provider.",
    },
    {
      image: "https://ichef.bbci.co.uk/images/ic/raw/p0jq6tfl.jpg.webp",
      title: "Register for a BBC account",
      description:
        "Don't have time to read everything right now? Your BBC account lets you save articles and videos for later.",
    },
    {
      image: "https://ichef.bbci.co.uk/images/ic/raw/p0jq6tfl.jpg.webp",
      title: "The Essential",
      description: "The week's best articles and videos from BBC editors, in your inbox.",
    },
    {
      image: "https://ichef.bbci.co.uk/images/ic/raw/p0jq6tfl.jpg.webp",
      title: "The Essential",
      description: "The week's best articles and videos from BBC editors, in your inbox.",
    },
    {
      image: "https://ichef.bbci.co.uk/images/ic/raw/p0jq6tfl.jpg.webp",
      title: "The Essential",
      description: "The week's best articles and videos from BBC editors, in your inbox.",
    },


  ];

    const featureData = [
      {
        imageSrc: "https://ichef.bbci.co.uk/images/ic/1920x1080/p0kcf7vv.jpg.webp",
        title: "How LGBTQ stories got real on-screen in 2024",
        description:
          "From Queer to Baby Reindeer and Will & Harper, LGBTQ representation took a step forward with varied and authentic characters.",
        buttonText: "See more",
        featureHeading: "Culture",
        imagePosition: "left"

      },
      {
        imageSrc: "https://ichef.bbci.co.uk/images/ic/1376x774/p0kbxwl8.jpg.webp",
        title: "Seven climate wins you may have missed in 2024",
        description:
          "Global temperatures rose and extreme weather ramped up, but significant breakthroughs for the climate took place this year.",
        buttonText: "See more",
        featureHeading: "Future Planet",
        imagePosition: "right"

      },
    ];


  return (
    <div className="container mx-auto px-10">

      <HeroSection variant="homepage" data={homepageData} mainStory={mainStory}
      />
      <TwoColumnSection />
      <NewsSection heading={moreNewsData.heading} items={moreNewsData.items} variant="homepage" />

      {heroData.map((data, index) => (
        <HeroContent key={index} {...data} />
      ))}
      <FeatureLayout features={featureData} />
      <NewSlider items={data} />
      <NewsGrid />

    </div>
  );
}
