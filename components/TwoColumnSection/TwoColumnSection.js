import React from "react";
import Image from "next/image";

const BBCExclusive = () => {
  return (
    <div className="container mx-auto p-6 border-t-2 border-black">
      <h2 className="text-2xl font-bold mb-6">Only from the BBC</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <div className="space-y-3 hover:underline cursor-pointer border-b-2  mb-3">
          <Image 
          width={400}
          height={300}
            src="https://ichef.bbci.co.uk/images/ic/1024x576/p0kbvnk2.jpg.webp"
            alt="Gorizia church and roses" 
            className="w-full  object-cover aspect-[4/3]"
          />
          <h3 className="text-xl font-bold">Europe's first borderless Capital of Culture</h3>
          <p className="text-gray-600">In 1947, Gorizia was abruptly split between Italy and Slovenia. In 2025, the two towns will reunite as the first transnational European Capital of Culture.</p>
          <div className="flex items-center text-sm text-gray-500 mt-2 mb-2">
            <span>3 hrs ago</span>
            <span className="mx-2">|</span>
            <span>Travel</span>
          </div>
        </div>
        <div className="space-y-3 hover:underline cursor-pointer border-b-2 mb-3">
          <Image 
                    height={300}

                    width={400}

            src="https://ichef.bbci.co.uk/images/ic/1024x576/p0kcgf1z.jpg.webp"
            alt="Lymphoedema illustration" 
            className="w-full  object-cover aspect-[4/3]"
          />
          <h3 className="text-xl font-bold">The cancer side-effect no-one talks about</h3>
          <p className="text-gray-600">Patients who beat cancer can be left with Lymphoedema, an incurable, chronic and painful condition. Sufferers are fighting to bring this hidden condition to light.</p>
          <div className="flex items-center text-sm text-gray-500 mt-2 pb-2">
            <span>6 hrs ago</span>
            <span className="mx-2">|</span>
            <span>Future</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BBCExclusive;