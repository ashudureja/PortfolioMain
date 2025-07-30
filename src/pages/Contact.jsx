import React from 'react'
import Bracket from '../Animations/Bracket'

const Contact = () => {
  return (
    <div className='h-screen w-full bg-[#efefef] flex flex-col justify-between  px-6 py-3'>
         <div className="grid grid-cols-1 mt-20 md:grid-cols-3 gap-8 mb-24">
        <div>
          <label className="block text-[30px]">Your name</label>
          <input
            type="text"
            className="w-full border-b border-black outline-none bg-transparent"
          />
        </div>
        <div>
          <label className="block text-[30px]">Your email</label>
          <input
            type="email"
            className="w-full border-b border-black outline-none bg-transparent"
          />
        </div>
        <div className="relative">
          <label className="block text-[30px]">Your message</label>
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
              <div>
            {/* <div className="tracking-[-4px] mt-20 sm:mt-25 md:mt-20  md:tracking-[-9px] text-center md:text-left font-[figtree] text-[80px] sm:text-[120px] md:text-[150px] lg:text-[206px] leading-[0.9]">
              (ASHU)
            </div> */}
            <Bracket text="ASHU" className="tracking-[-4px] mt-20 sm:mt-25 md:mt-20  md:tracking-[-9px] text-center md:text-left font-[figtree] text-[80px] sm:text-[120px] md:text-[150px] lg:text-[206px] leading-[0.9] items-center justify-center md:items-start md:justify-start"></Bracket>
          </div>
              {/* <div className="absolute top-4 -right-10 w-12 h-12 border-4 border-gray-900 rounded-full flex items-center justify-center">
                <span className="text-gray-900 font-bold text-xl">©</span>
              </div> */}
            </div>
          </div>
    </div>
  )
}

export default Contact