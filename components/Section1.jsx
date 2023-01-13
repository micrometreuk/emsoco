
import React from 'react'

export default  function Hero1() {
  return (
    <div className="relative w-full h-full bg-gray-200 overflow-hidden">

      <div className="absolute w-full h-full bg-black">
        <img src="https://fancytailwind.com/static/d38369764db9945c335175de244c268f/2e8d7/portrait1.webp" alt="" className="absolute -right-28 w-full h-full object-cover" />
      </div>

      {/* :HERO CONTAINER */}
      <div className="relative py-10 xl:py-20 px-5 w-full sm:w-2/3 h-full flex flex-col justify-center items-center bg-white bg-opacity-90">

        {/* ::Top Title */}
        <h2 className="mt-14 text-center text-base sm:text-lg text-gray-800 font-newsreader font-medium uppercase tracking-extra"><span className="text-3xl">T</span>his is how <span className="text-3xl">F</span>ancy <span className="text-3xl">T</span>ailwind</h2>

        {/* ::Title => W O R K */}
        <div className="pb-7 sm:pb-14 xl:pb-20 max-w-sm sm:max-w-xl xl:max-w-2xl w-full flex flex-col items-center overflow-hidden" style={{ textShadow: "2px 2px 5px rgba(86,90,88,0.85)" }}>

          {/* :::W O */}
          <span className="relative w-full text-7xl sm:text-8xl md:text-9xl xl:text-10xl font-semibold flex justify-around">
            <span className="z-10">W</span>
            <span>O</span>
            {/* Line through */}
            <span className="absolute top-1/2 w-5/6 h-3 md:h-6 bg-yellow-700 bg-opacity-80 shadow-lg transform -translate-x-full animate-linethrough" />
            {/* Shadow W and O */}
            <span className="absolute hidden md:block -bottom-8 left-40 w-16 md:w-32 h-32 bg-gray-800 bg-opacity-20 filter blur-xl" />
            <span className="absolute hidden md:block -bottom-8 right-10 w-16 md:w-32 h-32 bg-gray-800 bg-opacity-20 filter blur-xl" />
          </span>

          {/* :::R K */}
          <span className="relative w-full text-7xl sm:text-8xl md:text-9xl xl:text-10xl font-semibold flex justify-around">
            <span>R</span>
            <span className="z-10">K</span>
            {/* Line through */}
            <span className="absolute top-1/2 w-5/6 h-3 md:h-6 bg-yellow-700 bg-opacity-80 shadow-lg transform translate-x-full animate-linethrough" />
            {/* Shadow R and K */}
            <span className="absolute hidden md:block -bottom-8 left-40 w-16 md:w-32 h-32 bg-gray-800 bg-opacity-20 filter blur-xl" />
            <span className="absolute hidden md:block -bottom-8 right-10 w-16 md:w-32 h-32 bg-gray-800 bg-opacity-20 filter blur-xl" />
          </span>

        </div>

        {/* ::Bottom title and text */}
        <div className="w-3/4 flex flex-col md:flex-row">
          {/* :::Title */}
          <h3 className="sm:px-5 text-center md:text-right text-lg text-gray-800 font-newsreader font-normal uppercase tracking-widest"><span className="text-3xl">O</span>ur <span className="text-3xl">A</span>pproach</h3>
          {/* :::Text */}
          <p className="sm:px-5 text-center md:text-left font-light leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sapiente tempore placeat. Maxime officia itaque ipsa similique exercitationem veniam. Provident quibusdam recusandae accusamus temporibus dolorem reiciendis optio.</p>
        </div>

      </div>

    </div>
  );
}












export  function SwiperHero() {
  return (
    <div className="swiper-container">
      <div className="swiper-main">
      </div>
      <style jsx>{`
            `}</style>
      <style jsx global>{`
                #app {
                    height: 100%;
                }
                html,
                body {
                    position: relative;
                    height: 100%;
                }

                body {
                    background: #eee;
                    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
                    color: #000;
                    margin: 0;
                    padding: 0;
                }

                * {
                    box-sizing: border-box;
                }
            `}</style>
    </div>
  );
}