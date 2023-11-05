import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="bg-primary-500 w-full py-2 text-blue-700 text-center">
        <p>Welcome to Gentoo Portfolio Builder</p>
      </div>

      <div className="flex flex-row">
        <header className="bg-neutral-400 w-full mt-5 px-1 rounded-full h-fit flex justify-start items-center gap-5">
          <img
            src="https://shorturl.at/apDF3"
            alt="Logo"
            className="rounded-3xl px-1 py-1 w-[50px] h-[50px]"
          />
          <div className="bg-neutral-800 rounded-full px-3">
            <h1 className="text-neutral-50 text-xl">
              Gentoo Portfolio Builder
            </h1>
          </div>
          <div className="pl-55 gap-4 justify-end flex">
            <div className="px-5 bg-neutral-800 rounded-full">
              <h1 className="text-neutral-50 text-xl">
                Professional Portfolio
              </h1>
            </div>
            <div className="px-5 bg-neutral-800 rounded-full">
              <h1 className="text-neutral-50 text-xl">Academic Portfolio</h1>
            </div>
            <div className="px-5 bg-neutral-800 rounded-full">
              <h1 className="text-neutral-50 text-xl">Creative Portfolio</h1>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
