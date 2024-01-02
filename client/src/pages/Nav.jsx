import React, { useState } from "react";

const navItems = [
  { path: "/my-job", title: "My Jobs" },
  { path: "/search", title: "Search Jobs" },
  { path: "/saved-jobs", title: "Saved Jobs" },
  { paths: "/myfav", title: "My Favorites" },
];

const Nav = () => {
  const [togglemenu, setTogglemenu] = useState(false);

  const handleMenu = () => {
    setTogglemenu(!togglemenu);
  };
  return (
    <div>
      <header>
        <nav className="flex justify-between">
          <a href="/">Logo</a>
          <div className="hidden md:flex">
            {navItems.map(({ path, title }) => (
              <a key={path} href={path}>
                {title}
              </a>
            ))}
          </div>

          <div className="hidden md:flex">
            <a href="/login">login</a>
            <a href="signin">signup</a>
          </div>

          {/* mobile menu */}

          <div
            onClick={handleMenu}
            className="flex md:hidden cursor-pointer text-2xl"
          >
            {togglemenu ? "X" : "="}
          </div>
        </nav>

        {/* mobile nav */}

        <div>
          <div className={`flex flex-col ${togglemenu ? "" : "hidden"}`}>
            {navItems.map(({ path, title }) => (
              <a key={path} href={path}>
                {title}
              </a>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav;
