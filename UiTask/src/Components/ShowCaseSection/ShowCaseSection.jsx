import React from "react";

const ShowCaseSection = () => {
  return (
    <div className="flex flex-col items-center space-y-8 p-8 bg-white w-[95%] m-auto">
    
      <div className="flex space-x-6 ">
        <div className="bg-gradient-to-b from-purple-600 to-purple-800 text-center rounded-xl p-6 max-w-md shadow-md text-white">
          <h3 className="text-green-500 font-bold mb-2">Join As a Brand</h3>
          <h2 className="text-4xl font-bold my-10">
            Interdum et malesuada fames ac
          </h2>
          <a href="#" className="text-white underline mb-8 inline-block">
            Join as a Brand →
          </a>
          <img
            src="https://mastercamp.org/_next/static/media/scroller3.6640fd61.png"
            alt="Brand"
            className="rounded-md pt-16"
          />
        </div>

       
        <div className="bg-gradient-to-b from-purple-600 to-purple-800 text-center rounded-xl p-8 max-w-md shadow-md text-white">
          <h3 className="text-green-500 font-bold mb-2">Join As a Creator</h3>
          <h2 className="text-4xl font-bold mb-4">
            Interdum et malesuada fames ac
          </h2>
          <a href="#" className="text-white underline mb-8 inline-block">
            Join as a Creator →
          </a>
          <img
            src="https://hizo.africa/img/get_transacting.webp"
            alt="Creator"
            className="rounded-md"
          />
        </div>
      </div>

      <div className="flex gap-5 shadow-md rounded-lg">
        <div className="flex flex-col  p-4 bg-white rounded-md  max-w-4xl w-full">
          <div className="flex space-x-4 py-4">
            <span className="p-2 bg-purple-100 rounded-full text-purple-500">
              📺
            </span>
            <span className="p-2 bg-purple-100 rounded-full text-purple-500">
              📸
            </span>
            <span className="p-2 bg-purple-100 rounded-full text-purple-500">
              📘
            </span>
            <span className="p-2 bg-purple-100 rounded-full text-purple-500">
              🎵
            </span>
            <span className="p-2 bg-purple-100 rounded-full text-purple-500">
              👻
            </span>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2">
              Phasellus accumsan imperdiet tempor. Cras tincidunt, arcu
            </h2>
            <p className="text-gray-700">
              Integer id augue iaculis, iaculis orci ut, blandit quam. Donec in
              elit auctor, finibus quam in, pharetra libero.
            </p>
          </div>
        </div>
        <img
          src="https://www.team-bhp.com/forum/attachments/indian-car-scene/2171513d1624720722-new-xto-variant-tata-tiago-2.jpg"
          alt="Table Data"
          className="rounded-lg shadow-md w-56"
        />
      </div>
    </div>
  );
};

export default ShowCaseSection;
