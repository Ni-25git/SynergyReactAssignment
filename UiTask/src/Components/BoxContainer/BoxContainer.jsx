import React from 'react'

const BoxContainer = () => {
  return (
  <>
  <div className="flex items-center justify-center  gap-20 h-full bg-white p-4 w-[95%] m-auto">
  
      <div className='w-[40%] bg-[#f7f1ec]'>
      <div className=" p-4 rounded-md mb-16" >
        <h2 className="text-4xl font-medium mb-2">Meet</h2>
        <h1 className="text-5xl font-bold ">The Design</h1>
        <h1 className='text-5xl font-bold ' >Creator</h1>
      </div>
      <a href="#" className="text-purple-600 hover:underline flex items-center px-4 mb-4">
          Read more
          <span className="mb-2  text-purple-600">→</span>
        </a>
     </div>

      <div className="flex-1 ml-8 w-[35%] py-4">
        <h1 className="text-4xl font-bold py-4">Aman K.</h1>
       <div className='flex gap-5'>
       <img className='w-20' src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" alt="" />
       <p className="text-gray-500 py-5 text-2xl">Design Creator</p>
       </div>
        <p className="text-gray-700 py-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini
        </p>
        
        <div className="flex mt-4 space-x-4">
          
          <img className="w-10 h-10 rounded-full" src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png" alt="Avatar 1" />
          <img className="w-10 h-10 rounded-full" src="https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg" alt="Avatar 2" />
          <img className="w-10 h-10 rounded-full" src="https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg" alt="Avatar 3" />
          <img className="w-10 h-10 rounded-full" src="https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg" alt="Avatar 4" />
          <img className="w-10 h-10 rounded-full" src="https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg" alt="Avatar 5" />
        </div>
      </div>
    </div>
  
  
  </>
  )
}

export default BoxContainer