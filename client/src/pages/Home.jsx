import React, { useState } from "react";
import netflix from "../assets/images/netflix.png";

const name = "salman hamza";

const Home = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuToggle = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div className="w-full py-14 bg-black flex">
      {/* navbar */}
      <header className={`md:px-44 px-4  fixed top-0 left-0 w-full`}>
        <nav className="flex justify-between items-center ">
          <img className="md:h-[100px] h-[60px]" src={netflix} alt="logo" />
          <div className="text-white cursor-pointer" onClick={menuToggle}>
            {name}
            <div>
              {toggleMenu && (
                <button
                  className={`text-white border rounded-2xl bg-primary-color p-3 absolute top-20 right-48 `}
                >
                  sign out
                </button>
              )}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Home;
