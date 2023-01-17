
import React from 'react'


export default function FunFacts() {
    return (
        <div className="relative w-full h-full flex flex-col justify-center ite1ms-center bg-gray-50 overflow-hidden">

            <div className="pt-2 sm:pt-2 lg:pt-4 w-full flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-gray-600"> {/* Container */}
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
                <ProductSuggestion6/>
        </div>
    )
}




function ProductSuggestion6() {

    const products = [
        {
            id: 1,
            href: "#link",
            name: "185+\n Completed works",
        },
        {
            id: 2,
            href: "#link",
            name: "132+\n Satisfied clients",
        },
        {
            id: 3,
            href: "#link",
            name: "+5 Spoken languages",
        },
        {
            id: 4,
            href: "#link",
            name: "+2Offices abroad",
        },
    ]

    return (
            <div className="mx-auto max-w-sm sm:max-w-2xl lg:max-w-none  px-0 w-full">
                <div className="mt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-x-5">
                    {products.map(product => (
                        <div key={product.id} className="col-span-1 relative py-10 px-10 shadow-sm rounded border   bg-yellow-500 border-gray-200  overflow-hidden hover:shadow-lg">
                            <div className="relative z-10 flex flex-col items-start space-y-1">
                                <h3 className="text-base lg:text-lg text-white font-bold">{product.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    )
}

