
import React from 'react'
import { AcademicCapIcon, BadgeCheckIcon, TrendingUpIcon, UserGroupIcon } from '@heroicons/react/outline'


const Features5 = () => {
  return (
      <section className="">
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center" style={{ minHeight: "75vh" }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: "url('/bg-parallax1-1.webp')" }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
              <div className="relative w-full flex flex-col lg:flex-row justify-center items-center">
                <dl className="flex-grow-0 px-4 grid grid-cols-8 gap-4">
                  <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-2 mx-auto py-5 px-2.5 w-full max-w-xs flex flex-col justify-center items-center space-y-2 rounded-sm border-2 border-gray-100 sm:border-blue-300 lg:border-gray-100 bg-black bg-opacity-80 text-center">
                    {/* Icon */}
                    <span className="w-14 h-14 inline-flex justify-center items-center rounded-full bg-gray-100 sm:bg-blue-300 lg:bg-gray-100">
                    </span>
                    {/* Feature name */}
                    <dt className="lg:text-lg font-rubik font-bold uppercase tracking-widest">Expertise</dt>
                    {/* Description */}
                    <dd className="py-2 text-xs lg:text-sm text-gray-50 text-opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eos, fuga aliquid magnam harum quidem doloribus ratione. </dd>
                  </div>

                  {/* :::Feature 2 -> Leadership */}
                  <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-2 mx-auto py-5 px-2.5 w-full max-w-xs flex flex-col justify-center items-center space-y-2 rounded-sm border-2 border-blue-300 sm:border-gray-100 lg:border-blue-300 bg-black bg-opacity-80 text-center">
                    {/* Icon */}
                    <span className="w-14 h-14 inline-flex justify-center items-center rounded-full bg-blue-300 sm:bg-gray-100 lg:bg-blue-300">
                    </span>
                    {/* Feature name */}
                    <dt className="lg:text-lg font-rubik font-bold uppercase tracking-widest">Leadership</dt>
                    {/* Description */}
                    <dd className="py-2 text-xs lg:text-sm text-gray-50 text-opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eos, fuga aliquid magnam harum quidem doloribus ratione. </dd>
                  </div>

                  {/* :::Feature 3 -> Careers */}
                  <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-2 mx-auto py-5 px-2.5 w-full max-w-xs flex flex-col justify-center items-center space-y-2 rounded-sm border-2 border-gray-100 md:border-blue-300 bg-black bg-opacity-80 text-center">
                    {/* Icon */}
                    <span className="w-14 h-14 inline-flex justify-center items-center rounded-full bg-gray-100 md:bg-blue-300">
                    </span>
                    {/* Feature name */}
                    <dt className="lg:text-lg font-rubik font-bold uppercase tracking-widest">Careers</dt>
                    {/* Description */}
                    <dd className="py-2 text-xs lg:text-sm text-gray-50 text-opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eos, fuga aliquid magnam harum quidem doloribus ratione. </dd>
                  </div>

                  {/* :::Feature 4 -> Partnership */}
                  <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-2 mx-auto py-5 px-2.5 w-full max-w-xs flex flex-col justify-center items-center space-y-2 rounded-sm border-2 border-blue-300 md:border-gray-100 bg-black bg-opacity-80 text-center">
                    {/* Icon */}
                    <span className="w-14 h-14 inline-flex justify-center items-center rounded-full bg-blue-300 md:bg-gray-100">
                    </span>
                    {/* Feature name */}
                    <dt className="lg:text-lg font-rubik font-bold uppercase tracking-widest">Partnership</dt>
                    {/* Description */}
                    <dd className="py-2 text-xs lg:text-sm text-gray-50 text-opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eos, fuga aliquid magnam harum quidem doloribus ratione. </dd>
                  </div>

                  <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-2 mx-auto py-5 px-2.5 w-full max-w-xs flex flex-col justify-center items-center space-y-2 rounded-sm border-2 border-blue-300 md:border-gray-100 bg-black bg-opacity-80 text-center">
                    {/* Icon */}
                    <span className="w-14 h-14 inline-flex justify-center items-center rounded-full bg-blue-300 md:bg-gray-100">
                    </span>
                    {/* Feature name */}
                    <dt className="lg:text-lg font-rubik font-bold uppercase tracking-widest">Partnership</dt>
                    {/* Description */}
                    <dd className="py-2 text-xs lg:text-sm text-gray-50 text-opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eos, fuga aliquid magnam harum quidem doloribus ratione. </dd>
                  </div>


                </dl>
              </div>
            </div>
        </div>
      </section>
  )
}

export default Features5
