import React, { useState } from "react";
function IndexPage() {
    const [menu, setMenu] = useState(false);
    return (
        <>
            <div className="relative w-full h-full pb-10">
                <div className="hidden md:block">
                    <img 
                    className="absolute bg-cover bg-center w-full h-full inset-0" 
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Hero%2008.png" 
                    alt 
                    />
                </div>
                <div className="relative px-4 xl:px-0 container mx-auto md:flex items-center gap-8">
                    <div className="text-color w-full md:w-1/3 pt-16 lg:pt-32 xl:pt-12">
                        <h1 className="text-4xl md:text-4xl lg:text-6xl w-11/12 lg:w-11/12 xl:w-full xl:text-6xl text-gray-900 font-extrabold f-f-l">Build, review and ship with ease</h1>
                        <div className="f-f-r text-base lg:text-base pb-20 sm:pb-0 pt-10 xl:pt-6">
                            <h2>The next big thing starts here. Start building with Prodify and be the first to market with a product that is ready to take on the competition and delight your customers</h2>
                        </div>
                    </div>
                    <img className="w-full mt-8 md:mt-0 object-fill md:w-2/3 md:-ml-4 lg:-ml-4 xl:ml-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Graphic.png" alt="sample page" role="img" />
                </div>
            </div>


            <style>{`
        .top-100 {
            animation: slideDown .5s ease-in-out;
        }

        @keyframes slideDown {
            0% {
                top: -50%;
            }

            100% {
                top: 0;
            }
        }

        * {
            outline: none !important;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-tap-highlight-color: transparent;
        } `}</style>
        </>
    );
}

export default IndexPage;
