import Image from "next/image";
import background from "../public/bg.webp";

export default function Heading() {
  return (

    <div className="relative overflow-hidden  mt-10 transition duration-300"
      style={{
        backgroundImage: "url(/bg.webp)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",

      }}

    >
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pb-6 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32  shadow-md  dark:border-gray-700 mt-10 transition duration-300">
          <div className="flex justify-center items-center flex-col ">
            <div className=" mt-10 transition duration-300">
              <main className="mx-auto mt-14 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-200 dark:text-white  sm:text-6xl md:text-6xl">
                    <span className="block xl:inline">Welcome to Emso & Co Solicitors</span>{' '}
                  </h1>
                </div>

                <div className="sm:text-center lg:text-left">
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-20 lg:right-0 lg:w-1/2
      flex w-full items-center justify-center rounded-md border border-transparent    px-8 py-3 text-base font-medium text-indigo-700  md:py-4 md:px-10 md:text-lg
            ">
      </div>
    </div>
  )
}