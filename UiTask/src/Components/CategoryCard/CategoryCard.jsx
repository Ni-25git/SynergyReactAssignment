import React from 'react'
import cardImage from "../../../src/assets/Screenshot 2024-09-07 121917.png"
import CreatorList from '../CreatorCard/CreatorCard';

function CategoryCard() {
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
    <>
    <div className='flex justify-center py-4'>
        <img className='w-full' src={cardImage} alt="" />
    </div>
    <CreatorList creators={creators}  title={"In The Spotlight"} />
    </>
  )
}

export default CategoryCard