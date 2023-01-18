import React, { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  return (
    <>
          <AnimatePresence initial={true} >
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            x: { type: "spring", stiffness: 110, damping: 13 },

            opacity: { duration: 1 }
          }}
        >
      <main>
        <section className="pb-2 relative block bg-gray-900">
          <div className="container mx-auto px-4 lg:pt-2 lg:pb-4">
            <div className="flex flex-wrap mt-8 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <h6 className="text-xl mt-5 font-semibold text-white">
                  +75% Winning guarantee
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                  This phenomenally success rate reflects the hard-work, tenacity, experience and undeniable expertise of our specialists.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Secure management
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Every aspect of your case is protected and hyper-secure, with levels of access and confidentiality of the highest priority.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Full time support
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Our helpline is closely monitored and we offer live chat and social media customer service 24 hours a day, 7 days a week, 365 days a year.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      </motion.div>
      </AnimatePresence>
    </>
  );
}