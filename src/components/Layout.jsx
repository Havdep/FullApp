import React from "react";
import { NavLink } from "react-router-dom";
function Layout() {
  return (
    <>
      <>
        <header className=" bg-gentoo-dark-purple border border-neutral-50 border-x-2 border-y-2 w-full mt-3 px-1 rounded-full h-fit flex justify-start items-center gap-5">
          <img
            src="https://shorturl.at/apDF3"
            alt="Logo"
            className="rounded-4xl px-1 py-1 w-12 h-12"
          />
          <div className=" bg-gentoo-med-purple rounded-full px-3">
            <h1 className=" text-neutral-50 text-xl ">
              Gentoo Portfolio Builder
            </h1>
          </div>
          <div className=" pl-55 gap-4 justify-end flex">
            <div className=" bg-gentoo-med-purple rounded-full">
              <a href="">
                <button className="border border-neutral-50 border-x-2 border-y-2 rounded-full px-5">
                  <h1 className=" text-neutral-50 text-xl ">
                    Professional Portfolio
                  </h1>
                </button>
              </a>
            </div>
            <div className=" bg-gentoo-med-purple rounded-full">
              <a href="">
                <button className="border border-neutral-50 border-x-2 border-y-2 rounded-full px-5">
                  <h1 className=" text-neutral-50 text-xl ">
                    Creative Portfolio
                  </h1>
                </button>
              </a>
            </div>
            <div className=" bg-[#502071] rounded-full">
              <a href="">
                <button className="border border-neutral-50 border-x-2 border-y-2 rounded-full px-5">
                  <h1 className=" text-neutral-50 text-xl ">
                    Academic Portfolio
                  </h1>
                </button>
              </a>
            </div>
          </div>
        </header>
        {/* Left Portion Starts Here */}
        <section className="flex gap-5 mt-5 mx-5">
          <div className="flex flex-col w-2/4 h-150 bg-gentoo-lite-purple rounded-3xl">
            {/* Prefessional */}
            <section className="flex">
              <div className=" w-2/4 h-44 bg-[#502071] border border-neutral-50 border-x-4 border-y-4 rounded-3xl mt-3 ml-3"></div>
              <div className="flex flex-col w-2/4 h-44 mt-5 ml-2 ">
                <h1 className=" font-bold text-xl text-neutral-50">
                  Professional
                </h1>
                <p className=" font-medium text-base text-[#0F011B]">
                  Python-based of fine-grained package management, "fake"
                  (OpenBSD-style) installs, safe unmerging, system profiles,
                  virtual packages, config file management, and more
                </p>
              </div>
            </section>
            <hr />
            <hr />
            {/* Creative Section */}
            <section className="flex">
              <div className="flex flex-col w-2/4 h-44 mt-5 ml-4 ">
                <h1 className=" font-bold text-xl text-neutral-50">Creative</h1>
                <p className=" font-medium text-base text-[#0F011B]">
                  Python-based of fine-grained package management, "fake"
                  (OpenBSD-style) installs, safe unmerging, system profiles,
                  virtual packages, config file management, and more
                </p>
              </div>
              <div className=" w-2/4 h-44 bg-[#502071] border border-neutral-50 border-x-4 border-y-4 rounded-3xl mt-3 ml-3 mr-3"></div>
            </section>
            <hr />
            <hr />
            {/* Academic Section */}
            <section className="flex">
              <div className=" w-2/4 h-44 bg-[#502071] border border-neutral-50 border-x-4 border-y-4 rounded-3xl mt-3 ml-3"></div>
              <div className="flex flex-col w-2/4 h-44 mt-5 ml-2 ">
                <h1 className=" font-bold text-xl text-neutral-50">Academic</h1>
                <p className=" font-medium text-base text-[#0F011B]">
                  Python-based of fine-grained package management, "fake"
                  (OpenBSD-style) installs, safe unmerging, system profiles,
                  virtual packages, config file management, and more
                </p>
              </div>
            </section>
          </div>
          {/* Intro Section */}
          <div className="flex flex-col w-2/4 h-150 bg-[#C7A4D6] rounded-3xl">
            <div className=" text-[#0F011B] border border-neutral-50 border-x-2 border-y-2 rounded-3xl font-bold text-sm px-3 py-3 mx-3 my-3">
              <p>
                The AI Portfolio builder aims to provide a simplified user
                interface for gathering personal and professional information
                from users to generate a prompt for GPT, which will then be used
                to create a personalised portfolio website.
              </p>
              <br />
              <p>
                Following are the features, user interface, and technical
                aspects of the project.
              </p>
            </div>
            <div className=" text-[#0F011B] border border-neutral-50 border-x-2 border-y-2 rounded-3xl font-bold text-sm px-3 py-3 mx-3 my-3">
              <h1 className=" text-[#0F011B]">Features</h1>
              <div className="mt-2">
                <h1 className=" text-neutral-50">1. Template Selection</h1>
                <p>
                  → Users can select from three template varieties:
                  Professional, Creative, and Academic.
                </p>
              </div>
              <div className="mt-3">
                <h1 className=" text-neutral-50">2. Information Input</h1>
                <p>→ Add a field for "Professional Summary".</p>
                <p>
                  → Update to allow experience entries such as Job title,
                  company name.
                </p>
                <p>
                  → Education section to allow users to input their education
                  details. [ Relevant Courses , Graduation Year , Institution
                  Name ]
                </p>
                <p>→ Skills section: to allow users add list of skills.</p>
                <p>
                  → Contact section with fields for : [ GitHub URL , Linkedln
                  URL , Twitter URL ]
                </p>
              </div>
              <div className="mt-3">
                <h1 className=" text-neutral-50">3. Template Customization</h1>
                <p>
                  → Users can select from three template varieties:
                  Professional, Creative, and Academic.
                </p>
                <p>
                  → Layout options include Header Positioning (top, side) and
                  the choice to include a photo in the header. If yes then ask
                  for the image URL.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <NavLink to="/select">
                <button className=" w-52 px-3 py-2 border border-neutral-50 border-x-4 border-y-4 bg-[#502071] hover:bg-[#3F0269] hover:text-lg text-neutral-50 text-sm font-bold rounded-full">
                  Generate Portfolio
                </button>
              </NavLink>
            </div>
          </div>
        </section>
      </>
    </>
  );
}

export default Layout;
