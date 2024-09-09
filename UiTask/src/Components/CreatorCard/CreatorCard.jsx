import React from "react";

const CreatorCard = ({ name, username, followers, imageUrl }) => (
  <div className="bg-white rounded-xl shadow-md p-4 max-w-xs w-full">
 
    <div className="relative">
      <img
        src={imageUrl}
        alt={name}
        
        className="w-full h-64 rounded-md mx-auto"
      />
      <span className="absolute top-2 left-2 bg-red-100 text-red-500 text-sm font-medium px-2 py-1 rounded-full">
        Entertainment
      </span>
    </div>

 
    <div className="mt-4">
      <h3 className="text-xl font-bold">{name} <span className="text-green-500">✔</span></h3>
      <p className="text-gray-500">{username}</p>
      <p className="text-gray-700 font-semibold text-lg">{followers} Followers</p>
    </div>

   
    <div className="flex justify-between items-center mt-4">
      <div className="flex space-x-2">
        <span className="text-gray-500">
          <i className="fab fa-instagram"></i>
        </span>
        <span className="text-gray-500">
          <i className="fab fa-youtube"></i>
        </span>
        <span className="text-gray-500">
          <i className="fab fa-facebook"></i>
        </span>
      </div>
      <button className="bg-purple-600 text-white px-4 py-1 rounded-md font-semibold">
        Compare
      </button>
    </div>
  </div>
);

const CreatorList = ({creators,title}) => {
  

  return (
    <div className="p-8 bg-gray-50 w-[95%] m-auto">
     
      <div className="flex justify-between items-center mb-8">
        <div className="px-10">
          <h1 className="text-3xl font-bold text-purple-700 ">{title}</h1>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        </div>
        <button className="border border-black rounded-full px-4 py-2 text-sm">
          View All
        </button>
      </div>

      
      <div className="flex flex-wrap gap-6 justify-center">
        {creators.map((creator) => (
          <CreatorCard key={creator.username} {...creator} />
        ))}
      </div>
    </div>
  );
};

export default CreatorList;
