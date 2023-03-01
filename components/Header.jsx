import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between shadow-2xl min-h-[50px] items-center px-40 text-xl bg-gray-900 text-white ">
      <div>
        <span></span>
      </div>
      <div>
        <span className="mr-5 hover:text-orange-600 cursor-pointer">Home</span>
        <span className="mr-5 hover:text-orange-600 cursor-pointer">
          Projects
        </span>
        <span className="mr-5 hover:text-orange-600 cursor-pointer">
          Skills
        </span>
        <span className="mr-5 hover:text-orange-600 cursor-pointer">About</span>
        <span className="mr-5 hover:text-orange-600 cursor-pointer">
          Contact
        </span>
        <span className="hover:text-orange-600 cursor-pointer">
          <a href="resume.pdf">Resume</a>
        </span>
      </div>
    </div>
  );
};

export default Header;
