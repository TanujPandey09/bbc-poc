import HeroSection from "@/components/HeroSection/HeroSection";
import NewsSection from "@/components/NewsSection";

export default function NewsPage() {
    const topNewsMainStory = {
        image:
            "https://ichef.bbci.co.uk/ace/standard/800/cpsprodpb/fe0b/live/277d5090-bc59-11ef-aff0-072ce821b6ab.jpg.webp",
        title:
            "Ukraine says it killed senior Russian general who died in scooter blast in Moscow",
        description:
            "Lt Gen Igor Kirillov was charged yesterday in Ukraine for the use of chemical weapons, and was sanctioned by the UK in October.",
        highlights: ["General killed in Moscow a legitimate target, says Ukraine"],
        isLive: true,
        category: "Europe",
        time: "2 hrs ago"
    };

    const sportsMainStory = {
        image:
            "https://ichef.bbci.co.uk/news/480/cpsprodpb/ba83/live/5239d240-bc63-11ef-a0f2-fd81ae5962f4.jpg.webp",
        title: "Sports Star Makes History",
        description: "An incredible performance in today's game.",
        highlights: ["Record-breaking scores in the championship"],
        isLive: false, category: "Europe",
        time: "2 hrs ago"
    };

    const worldMainStory = {
        image:
            "https://ichef.bbci.co.uk/news/480/cpsprodpb/ba83/live/5239d240-bc63-11ef-a0f2-fd81ae5962f4.jpg.webp",
        title: "Global Summit 2024",
        description: "World leaders meet to discuss key issues.",
        highlights: ["Climate change and economic reforms dominate talks"],
        isLive: false, category: "Europe",
        time: "2 hrs ago"
    };

    const topNews = [
        {
            category: "Europe",
            time: "2 hrs ago", title: "Breaking: Major Event Unfolds", description: "Top news details", image: "https://ichef.bbci.co.uk/news/480/cpsprodpb/ba83/live/5239d240-bc63-11ef-a0f2-fd81ae5962f4.jpg.webp"
        },
        {
            category: "Europe",
            time: "2 hrs ago", title: "Economy Updates", description: "Updates on the economy", image: "https://ichef.bbci.co.uk/news/480/cpsprodpb/ba83/live/5239d240-bc63-11ef-a0f2-fd81ae5962f4.jpg.webp"
        },
        {
            category: "Europe",
            time: "2 hrs ago", title: "Economy Updates", description: "Updates on the economy", image: "https://ichef.bbci.co.uk/news/480/cpsprodpb/ba83/live/5239d240-bc63-11ef-a0f2-fd81ae5962f4.jpg.webp"
        }, {
            category: "Europe",
            time: "2 hrs ago", title: "Economy Updates", description: "Updates on the economy", image: "https://ichef.bbci.co.uk/news/480/cpsprodpb/ba83/live/5239d240-bc63-11ef-a0f2-fd81ae5962f4.jpg.webp"
        }

    ];

    const sportsNews = [
        {
            category: "Europe",
            time: "2 hrs ago", title: "Upcoming Tournaments", description: "Details on sports events", image: "https://ichef.bbci.co.uk/news/480/cpsprodpb/ba83/live/5239d240-bc63-11ef-a0f2-fd81ae5962f4.jpg.webp"
        },
        {
            category: "Europe",
            time: "2 hrs ago", title: "Highlights from Matches", description: "Match summaries", image: "https://ichef.bbci.co.uk/news/480/cpsprodpb/ba83/live/5239d240-bc63-11ef-a0f2-fd81ae5962f4.jpg.webp"
        },
        {
            category: "Europe",
            time: "2 hrs ago", title: "Highlights from Matches", description: "Match summaries", image: "https://ichef.bbci.co.uk/news/480/cpsprodpb/ba83/live/5239d240-bc63-11ef-a0f2-fd81ae5962f4.jpg.webp"
        },
        {
            category: "Europe",
            time: "2 hrs ago", title: "Highlights from Matches", description: "Match summaries", image: "https://ichef.bbci.co.uk/news/480/cpsprodpb/ba83/live/5239d240-bc63-11ef-a0f2-fd81ae5962f4.jpg.webp"
        },
    ];

    const worldNews = [
        {
            category: "Europe",
            time: "2 hrs ago", title: "Climate Change Report Released", description: "Key findings", image: "https://ichef.bbci.co.uk/news/480/cpsprodpb/ba83/live/5239d240-bc63-11ef-a0f2-fd81ae5962f4.jpg.webp"
        },
        {
            category: "Europe",
            time: "2 hrs ago", title: "Space Exploration Updates", description: "Latest discoveries", image: "https://ichef.bbci.co.uk/news/480/cpsprodpb/ba83/live/5239d240-bc63-11ef-a0f2-fd81ae5962f4.jpg.webp"
        },
        {
            category: "Europe",
            time: "2 hrs ago", title: "Highlights from Matches", description: "Match summaries", image: "https://ichef.bbci.co.uk/news/480/cpsprodpb/ba83/live/5239d240-bc63-11ef-a0f2-fd81ae5962f4.jpg.webp"
        },
        {
            category: "Europe",
            time: "2 hrs ago", title: "Highlights from Matches", description: "Match summaries", image: "https://ichef.bbci.co.uk/news/480/cpsprodpb/ba83/live/5239d240-bc63-11ef-a0f2-fd81ae5962f4.jpg.webp"
        },
    ];
    const mostWatchedData = {
        heading: "Most Watched",
        items: [
            { no: "1", title: "Garage CCTV shows moment earthquake hits Vanuatu" },
            { no: "2", title: "Canadians say US ties strong despite Trump jabs" },
            { no: "3", title: "Ros Atkins On... Igor Kirillov's death", },
            { no: "4", title: "Watch:'I am very sorry,S korea's president says'", },
            { no: "5", title: "Fire erupt after Lightining strike ruptures gas line in Tennessee", },
        ],
    };

    const mostReadData = {
        heading: "Most read",
        items: [
            { no: "1", title: "Russia detains Uzbek man over general's killing in Moscow" },
            { no: "2", title: "Sara Sharif's father and stepmother jailed for life for her murder" },
            { no: "3", title: "Could this be what our home on Moon or Mars might look like?" },
            { no: "4", title: "Could this be what our home on Moon or Mars might look like?" },
            { no: "5", title: "Could this be what our home on Moon or Mars might look like?" },
            { no: "6", title: "Could this be what our home on Moon or Mars might look like?" },
            { no: "7", title: "Could this be what our home on Moon or Mars might look like?" },

            { no: "8", title: "Could this be what our home on Moon or Mars might look like?" },
            { no: "9", title: "Could this be what our home on Moon or Mars might look like?" },
            { no: "10", title: "Could this be what our home on Moon or Mars might look like?" },
        ],
    };
    return (
        <div className="container px-8  py-4">
            <h3 className="text-6xl text-red-900 font-bold uppercase">News</h3>
            <div className="border-b-2 border-black py-1 mb-3"></div>
            {/* Hero Section for Top News */}
            <HeroSection mainStory={topNewsMainStory} data={topNews} variant="news" />

          
            <HeroSection
                title="Sports News"
                mainStory={sportsMainStory}
                data={sportsNews}
                variant="news"
            />
            <NewsSection heading={mostWatchedData.heading} items={mostWatchedData.items} type="mostWatched" />
            <HeroSection
                variant="news"
                title="World News"
                mainStory={worldMainStory}
                data={worldNews}
            />
            
            <NewsSection heading={mostReadData.heading} items={mostReadData.items} type="mostRead" />


            

        </div>



    );
}
