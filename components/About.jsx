import React from "react";
import Image from "next/image";
export default function About() {
  return (
    <div className="relative w-full h-full bg-gray-200 overflow-hidden">
      <div className="absolute w-full h-full bg-black">
        <Image
          priority="quality"
          src="/box-bg-image1.webp"
          alt="image slide1"
          width={1500}
          height={1500}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          className="absolute  absolute-right-28 w-full h-full object-cove r"
        />
      </div>

      <div className="relative py-10 xl:py-20 px-5 w-full sm:w-2/3 h-full flex flex-col justify-center items-center bg-white bg-opacity-90">
        <div
          className="pb-7 sm:pb-14 xl:pb-20 max-w-sm sm:max-w-xl xl:max-w-2xl w-full flex flex-col items-center overflow-hidden"
          style={{ textShadow: "2px 2px 5px rgba(86,90,88,0.85)" }}
        >
          <span className="relative w-full text-7xl sm:text-8xl md:text-9xl xl:text-10xl font-semibold flex justify-around">
            <span className="absolute top-1/2 w-5/6 h-3 md:h-6 bg-yellow-700 bg-opacity-80 shadow-lg transform -translate-x-full animate-linethrough" />
            <span className="absolute hidden md:block -bottom-8 left-40 w-16 md:w-32 h-32 bg-gray-800 bg-opacity-20 filter blur-xl" />
            <span className="absolute hidden md:block -bottom-8 right-10 w-16 md:w-32 h-32 bg-gray-800 bg-opacity-20 filter blur-xl" />
          </span>

          <span className="relative w-full text-7xl sm:text-8xl md:text-9xl xl:text-10xl font-semibold flex justify-around">
            <span>35</span>
            <span className="absolute top-1/2 w-5/6 h-3 md:h-6 bg-yellow-700 bg-opacity-80 shadow-lg transform translate-x-full animate-linethrough" />
            <span className="absolute hidden md:block -bottom-8 left-40 w-16 md:w-32 h-32 bg-gray-800 bg-opacity-20 filter blur-xl" />
            <span className="absolute hidden md:block -bottom-8 right-10 w-16 md:w-32 h-32 bg-gray-800 bg-opacity-20 filter blur-xl" />
          </span>
          <h2 className="mt-14 text-center text-base sm:text-lg text-gray-800 font-newsreader font-medium uppercase tracking-extra">
            <span className="text-3xl">y</span>ears
            <span className="text-3xl"></span> of{" "}
            <span className="text-3xl">p</span>racticing
          </h2>
        </div>

        <div className="w-3/4 flex flex-col md:flex-row">
          <h3 className="sm:px-5 text-center md:text-right text-lg text-gray-800 font-newsreader font-normal uppercase tracking-widest">
            <span className="text-3xl">A</span>bout{" "}
            <span className="text-3xl">U</span>s
          </h3>
          <p className="sm:px-5 text-center md:text-left font-light leading-relaxed">
            We are an internationally recognised law firm based in London with a
            long-standing presence in Europe and Africa.
            <br />
            <br />
            Our team offers a wide range of expertise to support our business
            and private clients in all areas of law, when it matters most.
            <br />
            <br />
            Our aim is to provide cost-effective legal expertise, with an
            exceptional level of service, and a genuine solution tailored to
            your individual, personal and business needs.
          </p>
        </div>
        <div className="overflow-y-hidden">
          <div className="xl:mx-auto xl:container  xl:px-0 md:px-0 px-0 py-1">
            <div className="lg:flex items-center justify-center lg:space-x-12 2xl:space-x-6">
              <div className>
                <div className="mt-6 md:mt-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:mt-6 2xl:mt-12">
                  <div className="flex items-center">
                    <div className="w-16 h-16 relative">
                      <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        &rarr;
                      </div>
                    </div>
                    <div className="flex items-start flex-col ml-6 pt-8">
                      <h2 className="text-lg font-semibold leading-4 text-gray-800">
                        Commitment to excellence <br />
                        through expertise and care
                      </h2>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 h-16 relative">
                      <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        &rarr;
                      </div>
                    </div>
                    <div className="flex items-start flex-col ml-6 pt-8">
                      <h2 className="text-lg font-semibold leading-4 text-gray-800">
                        Pro-active, professional and forward-thinking
                      </h2>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 h-16 relative">
                      <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        &rarr;
                      </div>
                    </div>
                    <div className="flex items-start flex-col ml-6 pt-8">
                      <h2 className="text-lg font-semibold leading-4 text-gray-800">
                        Offices in London and Paris
                      </h2>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 h-16 relative">
                      <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        &rarr;
                      </div>
                    </div>
                    <div className="flex items-start flex-col ml-6 pt-8">
                      <h2 className="text-lg font-semibold leading-4 text-gray-800">
                        Free assessment of your case and competitive rates
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
