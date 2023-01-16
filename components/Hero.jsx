import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";


const Hero = ({
  listUser = [
    {
      name: "This phenomenally success rate reflects the hard-work, tenacity, experience and undeniable expertise of our specialists.",
      number: "+75% Winning guarantee ",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Every aspect of your case is protected and hyper-secure, with levels of access and confidentiality of the highest priority.",
      number: "Secure management",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Our helpline is closely monitored and we offer live chat and social media customer service 24 hours a day, 7 days a week, 365 days a year.",
      number: "Full time support",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="mt-0 pt-0  relative w-full h-full ">
      <ScrollAnimationWrapper>
        <motion.div variants={scrollAnimation}>
      <div className="relative w-full flex">
        <div className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-3 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500  z-10">
          {listUser.map((listUsers, index) => (
            <div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-2 sm:w-auto mx-auto sm:mx-0"
              key={index}
            >
              <div 
              className="flex "
              >
                <div 
                className="flex flex-col"
                >
                  <p 
                  className="text-xl text-black-600 font-bold"
                  >
                    {listUsers.number}
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div >
      </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};




export default Hero;