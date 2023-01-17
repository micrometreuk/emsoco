
import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/solid'


export default function Features() {

    const features = [
        { name: "Private Security", description: "Commitment to excellence through expertise and care" },
        { name: "Maintenance", description: "Offices in London and Paris" },
        { name: "Optimization", description: "Pro-active, professional and forward-thinking" },
        { name: "Integration", description: "Free assessment of your case and competitive rates" },
    ]

    return (
        <div className="relative mx-auto py-10 px-6 w-full max-w-7xl bg-white">
            <div className="relative w-full flex flex-col items-center text-gray-800">
                <dl className="w-full grid grid-cols-4 gap-8">
                    {features.map(feature => (
                        <div className="col-span-full sm:col-span-2 lg:col-span-1 flex">
                            <div  className="flex-shrink-0 mr-2 w-8 h-8 text-green-600" />&rarr;
                            <div className="inline-flex flex-col space-y-3">
                                <div className="text-gray-600 font-semibold">{feature.description}</div>
                            </div>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}
