
import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
const PromoSection20 = () => {
  return (
    <div className="relative mx-auto px-4 w-full max-w-7xl bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2">

        <div className="order-last md:order-first col-span-1 mx-auto py-11 md:pl-6 max-w-lg flex flex-col justify-center items-start">
          <div className="relative">
            <p className="relative text-lg md:text-xl text-gray-700 font-bold">
              We offer a no-charge no-obligation initial telephone valuation of your case to identify its strengths and weaknesses.
            </p>
          </div>
          {/* ::Details */ }
          <div className="mt-6 flex items-center space-x-10">
            {/* :::price */}
            <p className="flex flex-col">
              <span className="text-xs text-gray-400 font-semibold">Book yours on</span>
              <span className="text-3xl text-black font-medium"> +44 (0)79 5186 7712</span>
            </p>
          </div>
        </div>
        {/* :PICTURE CONTAINER */}
        <div className="order-first md:order-last col-span-1 md:pl-6 flex justify-center items-center">
          <FloatingWhatsApp/>
        </div>

      </div>
    </div>
  )
}

export default PromoSection20
