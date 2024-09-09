import React from 'react';

const Navbar = () => {
  return (
    <nav className=" p-4 shadow-2xl border-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black font-bold text-xl w-[40%] px-10" >BookMYCollab</div>
        <ul className="flex space-x-6">
          <li><a href="/" className="text-black hover:text-gray-300">What We Do</a></li>
          <li><a href="/about" className="text-black hover:text-gray-300">How it works</a></li>
          <li><a href="/contact" className="text-black hover:text-gray-300">Join Us AS Brand</a></li>
          <li><a href="/contact" className="text-black hover:text-gray-300">Join Us AS Creator</a></li>
        </ul>
        <div className="text-white  hover:text-gray-400 w-[10%]" >
            <button className='bg-[#662fa4] w-[60%] h-8 rounded-lg'>Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
