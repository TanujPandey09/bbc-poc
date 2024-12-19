import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

// Footer Link Component for reusability
const FooterLink = ({ href = "#", children }) => (
  <a href={href} className="hover:underline text-gray-700 text-sm">
    {children}
  </a>
);

// Top Navigation Links
const mainNavLinks = [
  'Home', 'News', 'Sport', 'Business', 'Innovation', 'Culture', 
  'Arts', 'Travel', 'Earth', 'Video', 'Live', 'Audio', 'Weather', 'BBC Shop'
];

// Bottom Footer Links
const bottomLinks = [
  'Terms of Use', 'About the BBC', 'Privacy Policy', 'Cookies', 
  'Accessibility Help', 'Contact the BBC', 'Advertise with us', 
  'Do not share or sell my info', 'Contact technical support'
];

// Social Media Icons Component
const SocialMediaSection = () => (
  <div className="flex gap-4 items-center mt-4 md:mt-0">
    <span className="text-sm text-gray-600">Follow BBC on:</span>
    <div className="flex gap-4">
      <a href="#" className="hover:opacity-80" aria-label="Twitter"><FaTwitter size={20} /></a>
      <a href="#" className="hover:opacity-80" aria-label="Facebook"><FaFacebookF size={20} /></a>
      <a href="#" className="hover:opacity-80" aria-label="Instagram"><FaInstagram size={20} /></a>
      <a href="#" className="hover:opacity-80" aria-label="TikTok"><FaTiktok size={20} /></a>
      <a href="#" className="hover:opacity-80" aria-label="LinkedIn"><FaLinkedinIn size={20} /></a>
      <a href="#" className="hover:opacity-80" aria-label="YouTube"><FaYoutube size={20} /></a>
    </div>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-white text-black text-sm">
      {/* BBC Logo */}
      <div className="max-w-7xl mx-auto px-4 py-4 text-3xl font-bold tracking-widest">
       BBC
      </div>

      {/* Main Navigation */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {mainNavLinks.map((link) => (
              <FooterLink key={link}>{link}</FooterLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Language and Social Media Section */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4 md:flex-row md:items-center">
          <button className="bg-gray-100 px-4 py-2 text-sm border border-gray-300 rounded">
            BBC in other languages ▼
          </button>
          <SocialMediaSection />
        </div>
      </div>

      {/* Bottom Links and Copyright */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <nav className="flex flex-wrap gap-x-4 gap-y-2">
          {bottomLinks.map((link) => (
            <FooterLink key={link}>{link}</FooterLink>
          ))}
        </nav>

        <p className="text-left text-gray-600 text-xs mt-4">
          Copyright © 2024 BBC. All rights reserved. The{' '}
          <em>BBC is not responsible for the content of external sites.</em>{' '}
          <a href="#" className="font-semibold hover:underline">
            Read about our approach to external linking.
          </a>
        </p>
      </div>
    </footer>
  );
}
