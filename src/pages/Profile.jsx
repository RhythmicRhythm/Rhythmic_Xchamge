import React, { useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";

const Profile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              <div className="container mx-auto my-60">
                <div>
                  <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
                    <div className="flex justify-center">
                      <img
                        src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                        alt=""
                        className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
                      />
                    </div>
                    <div className="mt-16">
                      <h1 className="font-bold text-center text-3xl text-gray-900">
                        Okubadejo Rhythm
                      </h1>
                      <p className="text-center text-sm text-gray-400 font-medium">
                        UI Components Factory
                      </p>

                      <div className="my-5 px-6">
                        <a
                          href="#"
                          className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white"
                        >
                          Connect with{" "}
                          <span className="font-bold">@pantazisoft</span>
                        </a>
                      </div>

                      <div className="w-full">
                        <h3 className="font-medium text-gray-900 text-left px-6">
                          Recent activites
                        </h3>
                        <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                          <a
                            href="#"
                            className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
                          >
                            <img
                              src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                              alt=""
                              className="rounded-full h-6 shadow-md inline-block mr-2"
                            />
                            Added new profile picture
                            <span className="text-gray-500 text-xs">
                              42 min ago
                            </span>
                          </a>
                          <a
                            href="#"
                            className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
                          >
                            <img
                              src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                              alt=""
                              className="rounded-full h-6 shadow-md inline-block mr-2"
                            />
                            Posted new article in{" "}
                            <span className="font-bold">#Web Dev</span>
                            <span className="text-gray-500 text-xs">
                              49 min ago
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Profile;
