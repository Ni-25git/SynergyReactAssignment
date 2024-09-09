import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f7f1ec] text-gray-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
        
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">BookMyCollab</h2>
            <p className="text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut.
            </p>
            <div className="flex space-x-4">
             
              <a href="#" className="text-purple-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-purple-500">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-purple-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-purple-500">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Company</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-sm hover:text-purple-500">About</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-sm hover:text-purple-500">Career</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-sm hover:text-purple-500">Terms & Conditions</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-sm hover:text-purple-500">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-sm hover:text-purple-500">Refund Policy</a>
              </li>
            </ul>
          </div>

       
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Join us</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-sm hover:text-purple-500">Join as a brand</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-sm hover:text-purple-500">Join as a creator</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-sm hover:text-purple-500">Find creator</a>
              </li>
            </ul>
          </div>
        </div>
        
        
        <div className="mt-12 border-t bg-black text-white h-10 pt-2">
          <div className="flex justify-between text-sm text-gray-500">
            <div className="flex space-x-8">
              <p>No Upfront Payment</p>
              <p>Verified Creators</p>
              <p>Inbuilt Messengers</p>
              <p>Secure and Timely Payment</p>
            </div>
            <p>BookMyCollab 2024</p>
          </div>
          <p className="text-black py-4">© Copyright • All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
