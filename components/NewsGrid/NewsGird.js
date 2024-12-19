"use client";

import React from "react";
import NewsSection from "./NewsSection";

// Example News Data
const newsData = [
  {
    title: "US & Canada news",
    articles: [
      { title: "What we know about mysterious drones over New Jersey and other states", time: "37 mins ago", category: "US & Canada" },
      { title: "US aeroplane stowaway attempts fresh escape to Canada", time: "1 hr ago", category: "US & Canada" },
      { title: "US woman Hannah Kobayashi breaks silence after disappearance", time: "2 hrs ago", category: "US & Canada" },
      { title: "The numbers behind the rise in US mass shootings", time: "20 hrs ago", category: "US & Canada", image: "/https://ichef.bbci.co.uk/images/ic/1376x774/p0kbxwl8.jpg.webp", description: "Explaining some of the key statistics..." },
    ],
  },
  {
    title: "Israel-Gaza war",
    articles: [
      { title: "Gaza ceasefire talks in final stage, Palestinian negotiator tells BBC", time: "5 hrs ago", category: "Middle East" },
      { title: "Israeli foreign minister calls Ireland's premier 'antisemitic'", time: "18 hrs ago", category: "Europe" },
      { title: "Israeli strikes kill 50 in Gaza, Hamas-run health ministry says", time: "1 day ago", category: "Middle East" },
      { title: "Israel to close embassy in Ireland as it criticises 'anti-Israel policies'", time: "3 days ago", category: "World", image: "https://ichef.bbci.co.uk/images/ic/1376x774/p0kbxwl8.jpg.webp" },
    ],
  },
  {
    title: "War in Ukraine",
    articles: [
      { title: "General killed in Moscow a legitimate target, says Ukraine", time: "11 mins ago", category: "Europe" },
      { title: "Dad delivers supplies to troops over Christmas", time: "2 hrs ago", category: "Hereford & Worcester" },
      { title: "What verified videos tell us about Igor Kirillov's death", time: "3 hrs ago", category: "Europe" },
      { title: "What we know about North Korean troops fighting Russia's war", time: "18 hrs ago", category: "World", image: "https://ichef.bbci.co.uk/images/ic/1376x774/p0kbxwl8.jpg.webp" },
    ],
  },
  {
    title: "More world news",
    articles: [
      { title: "BBC reporter at scene of explosion that killed a Russian general", time: "44 mins ago", category: "Europe" },
      { title: "Los Zetas cartel boss re-arrested in Mexico after US jail time", time: "1 hr ago", category: "Latin America" },
      { title: "EU investigates TikTok over alleged Russian meddling in Romanian vote", time: "1 hr ago", category: "Europe", link: true },
      { title: "Man arrested over Kyran Durnin murder found dead", time: "17 hrs ago", category: "Europe", image: "https://ichef.bbci.co.uk/images/ic/1376x774/p0kbxwl8.jpg.webp" },
    ],
  },
];

const NewsGrid = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-6 py-10 px-4">
      {newsData.map((section, index) => (
        <NewsSection key={index} title={section.title} articles={section.articles} />
      ))}
    </div>
  );
};

export default NewsGrid;
