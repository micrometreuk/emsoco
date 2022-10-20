import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import React, { useState } from "react";
function Index() {
  const [show, setShow] = useState(false);
  return (
    <div className="py-12 bg-gray-100 overflow-y-hidden">
      {/* Code block starts */}
      <dh-component>
        <div className="w-full px-6
        mt-0
        pt-24
        bg-no-repeat bg-cover bg-center
        bg-[url('../public/bg-sm.webp')]
        xl:bg-[url('../public/bg.webp')]
        h-100 max-h-full
        ">
          <div className="mt-8 relative rounded-lg  container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
            <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-cursif font-bold italic leading-tight">Welcome</h1>
              <br/>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-cursif font-bold italic leading-tight">Emso and Co Solicitors</h1>
            </div>
            <div className="flex justify-center items-center mb-10 sm:mb-20">
              <button className="hover:bg-white hover:text-indigo-600 lg:text-xl hover:border-indigo-600 ml-3 sm:ml-6 bg-transparent transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700 focus:ring-white hover:bg-indigo-700-800 rounded border border-white text-white px-4 sm:px-8 py-1 sm:py-3 text-sm">Contact us today</button>
            </div>
          </div>
          <div className="container mx-auto flex justify-center md:-mt-56 -mt-20 sm:-mt-40">
            <div className="relative sm:w-2/3 w-11/12">
            </div>
          </div>
        </div>
      </dh-component>
      {/* Code block ends */}
    </div>

  );
}

export default Index;
