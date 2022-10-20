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
      <div className="flex min-h-screen flex-col items-center justify-center py-2">

        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <h1 className="text-6xl font-cursif font-bold">
            Welcome to{' '}
            <a className="text-blue-600" href="https://nextjs.org">
              Emso and Co Solicitors.
            </a>
          </h1>
        </main>

      </div>

    </div>
  )
}