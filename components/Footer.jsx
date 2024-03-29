import Image from 'next/image'
import Link from 'next/link'
import CopyRight from './Copyright'
import { FaPhone, FaWhatsapp, FaEnvelope, FaHome} from "react-icons/fa";

export function Footer() {
  return (
    <div>
      <footer className="flex h-24 w-full items-center justify-center border-t">
        <Link href="/privacy">
          <a
            className="flex items-center justify-center gap-1"
          >
            Privacy Policy
          </a>
        </Link>
      </footer>
      <footer>
        <CopyRight />
      </footer>
    </div>
  )
}



export default function Footer3() {
  return (
    <footer className="relative bg-gray-300 pt-8 pb-6">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <span className=" bg-gray-200" aria-hidden="true" />
            <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
              <Image
                className=" focus:ring-indigo-500 h-8 w-auto"
                src="/logo-bg.webp"
                alt="logo"
                width={70}
                height={48}
                priority
              />
              <span className="ml-6 italic block text-sm font-medium">
                Emso and Co
                Solicitors
              </span>
            </a>
            <h5 className="text-lg mt-0 mb-2 text-gray-700">
              We are always here for you, 7 days a week. Contact us and we will take it from here.
            </h5>

            <div className="mt-6 cursor-pointer flex items-center space-x-10 ">
              <p className="flex flex-col">
                <FaPhone />
                <Link href="tel:07951867712">
                  <span className="text-lg text-black font-medium"> +44 (0)79 5186 7712</span>
                </Link>
              </p>
            </div>
            <div className="mt-6 cursor-pointer flex items-center space-x-10 ">
              <p className="flex flex-col">
                <FaEnvelope />
                <Link href="mailto:enquiries@emsoandcosolicitors.com">
                  <span className="text-lg text-black font-medium">
            enquiries@emsoandcosolicitors.com
                  </span>
                </Link>
              </p>
            </div>

            <div className="mt-6 cursor-pointer flex items-center space-x-10 ">
              <p className="flex flex-col">
                <FaHome />
                  <span className="text-lg text-black font-medium">
            PO Box 79106, London, SE26 9FD
                  </span>
              </p>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Help
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="">Contact
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="">Faqs
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="">Appointment
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  POLICIES
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="/">Code of Practice
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="/">Complaint Policy
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="/">Diversity Policy
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="/">Pricing Policy
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="/privacy">Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="/">Fees
                    </a>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              Copyright © {new Date().getFullYear()}{" "}emsoandcosolicitors.com{" "}
              <a
                href="/"
                className="text-gray-600 hover:text-gray-900"
              >
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}




