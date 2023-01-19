import React, { useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Parallax, Pagination, Navigation, Autoplay, Zoom } from "swiper";
import Textra from 'react-textra'
import Link from "next/link";

export default function HeroAnima1() {
  const [replay, setReplay] = useState(true);
  return (
    <>
      <div className="flex justify-center items-center">
        <Link href="tel:07951867712">
          <a className="flex items-center justify-center gap-2">
            <button className="hover:bg-white hover:text-indigo-600 lg:text-xl hover:border-indigo-600 ml-3 sm:ml-6 bg-transparent transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700 focus:ring-white hover:bg-indigo-700-800 rounded border border-white text-white px-4 sm:px-8 py-1 sm:py-3 text-sm">Contact us today</button>
          </a>
        </Link>
      </div>
    </>
  );
}

