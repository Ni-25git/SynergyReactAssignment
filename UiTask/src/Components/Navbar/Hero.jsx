import React from 'react';
import img from "../../../src/assets/Screenshot 2024-09-07 113751.png"
import CreatorList from '../CreatorCard/CreatorCard';

const Hero = () => {
    const creators = [
        {
          name: "Tanmay Bhatt",
          username: "tanmaybhat",
          followers: "1.9M",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimCyMyVjN0-HMVHhiaoMSW-X3UUsmmD3aVg&s",
        },
        {
          name: "Kusha Kapila",
          username: "kushakapila",
          followers: "3.7M",
          imageUrl: "https://m.media-amazon.com/images/M/MV5BM2MzZjIxMDAtZWM4Ny00ZTEwLWJlMzgtZDFmMzQyOGQxODY3XkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_.jpg",
        },
        {
          name: "Rohan Joshi",
          username: "mojorojo",
          followers: "597K",
          imageUrl: "https://m.media-amazon.com/images/M/MV5BN2QyZTQ0NDktOWQxZS00Yzc3LWIyZjgtOGM0ZmVkMTc3MGNhXkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_.jpg",
        },
        {
          name: "Bhuvan Bam",
          username: "bhuvan.bam22",
          followers: "19.4M",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/64/Bhuvan_Bam_at_Myntra%27s_Creator_Fest_2023_event_%28cropped%29.jpg",
        },
      ];
  return (
    <div>
    <div className="flex flex-col md:flex-row  justify-center gap-20 p-8 bg-white">
   
    <div className=" flex flex-col max-w-lg  ">
   
    <div className='h-[90%] p-4 '>
    <span className="text-4xl my-4">👋</span>
      <div className="flex items-center mb-4 ">
        
        <h1 className="text-3xl font-bold text-purple-700 ml-2 py-4">
          Simplifying Influencer Marketing For You!
        </h1>
      </div>
      <p className="text-gray-600 mb-6 px-2">
        Explore creators across YouTube, Instagram & Facebook to curate unique content for your brand
      </p>
    
      <div className="flex items-center gap-4 mb-8">
        <select className="p-2 w-48  border rounded-md shadow-md focus:outline-none">
          <option>Instagram</option>
          <option>Snapchat</option>
          <option>Facebook</option>
          <option>YouTube</option>
        </select>
        <select className="p-2 border rounded-md shadow-md focus:outline-none w-48">
          <option>Select Category</option>
          
        </select>
        <button className="p-2 w-24 bg-purple-600 text-white rounded-md shadow-md">
          Search
        </button>
      </div>
      </div>
     
      <div className="flex items-center space-x-4 mb-2">
        <span className="text-gray-400 ">Trusted By</span>
        <div className="flex items-center space-x-2">
          <span className="font-semibold">CHANEL</span>
          <span className="font-semibold">LOUIS VUITTON</span>
          <span className="font-semibold">PRADA</span>
          <span className="font-semibold">Calvin Klein</span>
          <span className="font-semibold">DENIM</span>
        </div>
      </div>
    </div>
   
    <div className="relative mt-8 md:mt-0">

      <img
        src={img}
        alt="Influencer"
        className="rounded-lg shadow-lg"
      />
      
      <div className="absolute top-0 left-0 p-4 text-red-600 font-bold text-2xl">
        <div>ENGAGE</div>
        <div>GROW</div>
        <div>EARN</div>
      </div>
    
    </div>
  </div>
  <CreatorList  creators={creators} title={"The OG Creators"}/>
  </div>
  );
};

export default Hero;
