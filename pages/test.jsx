
import React from 'react'


export default function ServicesTitle() {
  return (
    <div className="relative mx-auto py-10 px-3 w-full max-w-7xl text-white"style={{ minHeight: "27vh" }}>
      <div className="flex flex-col items-center top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: "url('/bg-parallax1-1.webp')" }}>
          <span id="blackOverlay" className="w-full h-full  opacity-75 bg-black"></span>

        <div className="max-w-4xl space-y-6 text-center">
          <h2 className="text-2xl sm:text-2xl font-bold capitalize">
           <span className="block sm:inline text-orange-800">Services</span>
          </h2>
          <h2 className="text-3xl sm:text-4xl font-bold capitalize">
          Our expertise at your disposal across a wide range of disciplines       
          <span className="block sm:inline text-orange-800">disciplines</span>
          </h2>
        </div>
      </div>
    </div>
  )
}

