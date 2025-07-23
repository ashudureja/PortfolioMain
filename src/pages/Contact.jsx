import React from 'react'

const Contact = () => {
  return (
    <div className='h-screen w-full bg-[#efefef] flex flex-col justify-between  px-6 py-3'>
         <div className="grid grid-cols-1 mt-20 md:grid-cols-3 gap-8 mb-24">
        <div>
          <label className="block text-xl font-medium mb-2">Your name</label>
          <input
            type="text"
            className="w-full border-b border-black outline-none bg-transparent"
          />
        </div>
        <div>
          <label className="block text-xl font-medium mb-2">Your email</label>
          <input
            type="email"
            className="w-full border-b border-black outline-none bg-transparent"
          />
        </div>
        <div className="relative">
          <label className="block text-xl font-medium mb-2">Your message</label>
          <input
            type="text"
            className="w-full border-b border-black outline-none bg-transparent"
          />
          <button className="absolute  top-0 right-0  px-4 py-1 text-xs font-semibold uppercase bg-black text-white rounded-full">
            Submit
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center lg:justify-start">
            <div className="relative">
              <h1 className="text-[20rem] lg:text-[25rem] font-bold text-gray-900 leading-none tracking-tighter">
                ASHU
              </h1>
              {/* <div className="absolute top-4 -right-10 w-12 h-12 border-4 border-gray-900 rounded-full flex items-center justify-center">
                <span className="text-gray-900 font-bold text-xl">©</span>
              </div> */}
            </div>
          </div>
    </div>
  )
}

export default Contact