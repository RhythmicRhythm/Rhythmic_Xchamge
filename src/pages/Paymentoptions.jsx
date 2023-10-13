import React, { useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";

const Paymentoptions = () => {
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
              <div className="p-8">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <div className="flex justify-center p-10 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                    <div className="w-64 h-40 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 rounded-lg shadow-lg">
                      <div className="flex justify-between m-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={34}
                          height={34}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#ffffff"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <rect x={3} y={5} width={18} height={14} rx={3} />
                          <line x1={3} y1={10} x2={21} y2={10} />
                          <line x1={7} y1={15} x2="7.01" y2={15} />
                          <line x1={11} y1={15} x2={13} y2={15} />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={34}
                          height={34}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#ffffff"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <circle cx="9.5" cy="9.5" r="5.5" fill="#fff" />
                          <circle cx="14.5" cy="14.5" r="5.5" />
                        </svg>
                      </div>
                      <div className="flex justify-center mt-4">
                        <h1 className="text-gray-400 font-thin font-os">
                          XXXX XXXX XXXX 1234
                        </h1>
                      </div>
                      <div className="flex flex-col justfiy-end mt-4 p-4 text-gray-400 font-quick">
                        <p className="font-bold text-xs">12 / 17</p>
                        <h4 className="uppercase tracking-wider font-semibold text-xs">
                          Our customer
                        </h4>
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

export default Paymentoptions;
