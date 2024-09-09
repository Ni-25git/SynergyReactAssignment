import React from "react";

function BrandSection() {
  return (
    <div className="py-16 bg-white">
     
      <div className="text-center mb-16">
        <h2 className="text-2xl font-bold text-purple-600 mb-2">Associated Brands</h2>
        <p className="text-gray-500 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        <div className="flex justify-center flex-wrap gap-10 w-[80%] m-auto">
      
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/2560px-Spotify_logo_with_text.svg.png" alt="Spotify" className="h-16" />
          <img src="https://storage.googleapis.com/gd-prod/images/f4f4bc5f-904a-4b61-972f-c403bc060679.799a99c1196c2fd4.webp" alt="Google" className="h-16" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGZVxQZ2UYa4aZMO1u_hgQPt-OVvqLq5MnoA&s" alt="Stripe" className="h-16" />
          <img src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" alt="YouTube" className="h-16" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnt253Qlda-6a5x8LltLHZD4IWMCmk7LOQ9Q&s" alt="Microsoft" className="h-16" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwWSC6-zmEuY69JS-I3Eb_GLzhRXAzDYwgnA&s" alt="Medium" className="h-8" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmMTYrYnpwbtD1O-JIdoYGqxEgkkK93X61Yw&s" alt="Zoom" className="h-16" />
          <img src="https://play-lh.googleusercontent.com/WTGDz8M2gRie-UPC1eFZ321-RavuXFhKlcvxHp0uVEDN0UrWfCMwU9uMvuEE98H3VtZG" alt="Uber" className="h-16" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTur0_-c4D2phAbrsB1m3VVcgyxuCjo48K-MA&s" alt="Grab" className="h-16" />
        </div>
      </div>

      <div className="text-center py-16 bg-white">
        <h2 className="text-2xl font-bold text-purple-600 mb-12">How it works</h2>
        <div className="flex justify-center items-start space-x-8">
         
          <div className="flex flex-col items-center">
            <div className="bg-purple-200 rounded-full p-4 mb-4">
              <span className="text-3xl text-purple-500">🔍</span>
            </div>
            <h3 className="font-semibold mb-2">Search</h3>
            <p className="text-gray-500 text-center max-w-xs">
              Search through thousands of creators for free and find the one best suited for the campaign.
            </p>
          </div>

      
          <div className="flex flex-col items-center">
            <div className="bg-blue-200 rounded-full p-4 mb-4">
              <span className="text-3xl text-blue-500">🤝</span>
            </div>
            <h3 className="font-semibold mb-2">Share & Review</h3>
            <p className="text-gray-500 text-center max-w-xs">
              Search through thousands of creators for free and find the one best suited for the campaign.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-pink-200 rounded-full p-4 mb-4">
              <span className="text-3xl text-pink-500">💳</span>
            </div>
            <h3 className="font-semibold mb-2">Pay Securely</h3>
            <p className="text-gray-500 text-center max-w-xs">
              Search through thousands of creators for free and find the one best suited for the campaign.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandSection;
