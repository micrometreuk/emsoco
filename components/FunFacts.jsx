
import React from 'react'
import CountUp from 'react-countup';

export default function FunFacts() {
    return (
        <div className="relative w-full h-full flex flex-col justify-center ite1ms-center bg-gray-50 overflow-hidden">

            <div className="pt-2 sm:pt-2 lg:pt-4 w-full flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-gray-600">
                    <div className="p-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                        <h1 className="py-10 text-3xl sm:text-5xl font-light tracking-wide leading-tight">
                            We are immensily proud of our achievements
                        </h1>
                    </div>
                </div>
                <div className="relative w-full lg:w-1/2 flex flex-col justify-center items-center overflow-hidden">
                    <h1 className="py-10 text-3l sm:text-5l font-light tracking-wide leading-tight">
                        We have a rich service record of successful
                        <br />
                        cases at both national and international level.
                    </h1>
                </div>
                <div className="relative w-full lg:w-1/2 flex flex-col justify-center items-center overflow-hidden">
                    <h1 className="py-10 text-3l sm:text-5l font-light tracking-wide leading-tight">
                        Our reputation is based
                        <br />
                        on professionalism, purposefulness,
                        <br />
                        innovation, creativity and sensitivity.
                    </h1>
                </div>
            </div>
            <Faqs2 />
        </div>
    )
}


export function Faqs2() {
    return (
        <div>
            <div className=" lg:px-2 md:px-6 px-4 ">
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 xl:grid-cols-4 justify-items-around gap-x-6 gap-y-6 xl:gap-y-0 xl:gap-x-8 mt-10">
                        <button className="w-full focus:outline-none border focus:border-gray-800 border-transparent bg-yellow-800 flex justify-center items-center flex-col text-center py-10 px-12 space-y-6">
                            <p className="text-xl font-extrabold leading-5 text-gray-200">
                                <span>
                                    <CountUp
                                        end={185}
                                    />
                                    +
                                    <br />
                                    Completed works
                                </span>
                            </p>
                        </button>
                        <button className="w-full focus:outline-none border focus:border-gray-800 border-transparent bg-gray-900 flex justify-center items-center flex-col text-center py-10 px-12 space-y-6">
                            <p className="text-xl font-extrabold leading-5 text-gray-200">

                                <span>
                                    +
                                    <CountUp
                                        end={132}
                                    />
                                    <br />
                                    Satisfied clients
                                </span>
                            </p>
                        </button>
                        <button className="w-full focus:outline-none border focus:border-gray-800 border-transparent bg-yellow-800 flex justify-center items-center flex-col text-center py-10 px-12 space-y-6">
                            <p className="text-xl font-extrabold leading-5 text-gray-200">

                            <span>
                                +
                                <CountUp end={5} />
                                <br />
                                Spoken languages
                            </span>
                            </p>
                        </button>
                        <button className="w-full focus:outline-none border focus:border-gray-800 border-transparent bg-gray-900 flex justify-center items-center flex-col text-center py-10 px-12 space-y-6">
                            <p className="text-xl font-extrabold leading-5 text-gray-200">


                            <span>
                                +
                                <CountUp end={2} />
                                <br />
                                Offices abroad
                            </span>
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
