"use client"
import React, { useState, useEffect } from "react";
import { Menu, Search } from "lucide-react";

const Header = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const links = [
    { label: "Home", href: "#" },
    { label: "News", href: "#news" },
    { label: "Sport", href: "#sport" },
    { label: "Business", href: "#business" },
    { label: "Innovation", href: "#innovation" },
    { label: "Culture", href: "#culture" },
    { label: "Arts", href: "#arts" },
    { label: "Travel", href: "#travel" },
    { label: "Earth", href: "#earth" },
    { label: "Video", href: "#video" },
    { label: "Live", href: "#live" },
  ];

  const newsSubCategories = [
    { label: "US & Canada", href: "#news/us-canada" },
    { label: "UK", href: "#news/uk" },
    { label: "Africa", href: "#news/africa" },
    { label: "Asia", href: "#news/asia" },
    { label: "Europe", href: "#news/europe" },
    { label: "Latin America", href: "#news/latin-america" },
    { label: "Middle East", href: "#news/middle-east" },
    { label: "In Pictures", href: "#news/in-pictures" },
    { label: "BBC in Depth", href: "#news/in-depth" },
    { label: "BBC Verify", href: "#news/verify" },
    { label: "Gaza War", href: "#news/gaza-war" },
  ];

  return (
    isClient && (
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="flex justify-between items-center px-4 py-2 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <button aria-label="Menu" className="text-black">
              <Menu size={28} />
            </button>
            <button aria-label="Search" className="text-black">
              <Search size={28} />
            </button>
          </div>

          <a href="#" className="text-3xl font-bold tracking-widest">
            BBC
          </a>

          <div className="flex items-center space-x-6">
            <button className="bg-black text-white px-4 py-2 font-bold rounded">
              Register
            </button>
            <a href="#" className="text-black hover:underline">
              Sign In
            </a>
          </div>
        </div>

        <nav className="flex justify-center space-x-6 py-2">
          {links.map((link) => (
            <NavLink
              key={link.label}
              label={link.label}
              href={link.href}
              isActive={activeLink === link.label}
              onClick={() => setActiveLink(link.label)}
            />
          ))}
        </nav>

        {activeLink === "News" && (
          <nav className="bg-gray-100 border-t border-gray-300 py-2">
            <div className="flex justify-center space-x-4 overflow-x-auto px-4">
              {newsSubCategories.map((category) => (
                <NavLink
                  key={category.label}
                  label={category.label}
                  href={category.href}
                  isActive={false}
                  onClick={() => {}}
                  className="whitespace-nowrap"
                />
              ))}
            </div>
          </nav>
        )}
      </header>
    )
  );
};

const NavLink = ({ label, href, isActive, onClick, className = "" }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`relative text-sm py-1 font-bold ${
        isActive ? "text-black" : "text-gray-600 hover:text-gray-800"
      } ${className}`}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-[3px] bg-black" />
      )}
    </a>
  );
};

export default Header;