import React from "react";

const Footer = () => {
  return (
    <div className="h-screen bg-primary_green relative md:flex md:flex-row">
      <div className="h-20 w-10/12 bg-secondary_green flex justify-center items-center mb-10 md:h-32 md:w-1/2 absolute "></div>
      <div className="md:w-full relative ">
        <div className="w-4/5 ml-4  md:ml-20 pt-7 md:pt-10  md:w-11/12">
          <h1 className="font-Bebas mb-8 text-4xl md:text-6xl md:mb-20">
            register for the event!
          </h1>
          <form className="flex flex-col left-5 md:left-52 " action="">
            <label className="font-Bebas mb-5 text-2xl md:text-3xl" htmlFor="">
              NAME
            </label>
            <input className="h-12 md:h-20 mb-5" type="text" />
            <label className="font-Bebas mb-5 text-2xl md:text-3xl" htmlFor="">
              EMAIL
            </label>
            <input className="h-12 md:h-20 mb-12" type="text" />
            <button className=" bg-black text-white font-Bebas text-4xl px-16 py-5 mb-12 md:py-10">
              REGISTER NOW!
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col font-Monserrat text-lg justify-start w-4/5 m-auto md:text-2xl md:pl-64  md:relative md:-top-56">
        <p>1-555-555-3298</p>
        <hr className="bg-slate-500 border-none h-0.5 w-1/2" />
        <p>some@email.com</p>
        <hr className="bg-slate-500 border-none h-0.5 w-1/2" />
      </div>
    </div>
  );
};

export default Footer;
