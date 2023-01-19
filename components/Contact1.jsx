import Image from 'next/image'



export default function Contact1() {
  return <section className="relative block py-24 lg:pt-2 " id='contact'>
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center" style={{ minHeight: "75vh" }}>
      <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: "url('/bg-parallax3.webp')" }}>
      <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>

        <div className="w-full lg:w-6/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg ">
            <div className="flex-auto p-5 lg:p-10">
              <div className="relative w-full mb-3 mt-8">
                <label
                  className="block uppercase text-gray-100 text-xs font-bold mb-2"
                  htmlFor="full-name"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="First Name"
                  style={{ transition: "all .15s ease" }} />
                <label
                  className="block uppercase text-gray-100 text-xs font-bold mb-2"
                  htmlFor="full-name"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-gray-400 text-gray-100 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Last Name"
                  style={{ transition: "all .15s ease" }} />
              </div>

              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-100 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Email"
                  style={{ transition: "all .15s ease" }} />
              </div>

              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-100 text-xs font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  rows={4}
                  cols={80}
                  className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Type a message..." />
              </div>
              <div className="text-center mt-6">
                <button
                  className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  style={{ transition: "all .15s ease" }}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}

