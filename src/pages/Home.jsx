import React, { useState } from "react";
import drone from "../assets/web/drone.svg";
import close from "../assets/mobile/close.svg";
import img1 from "../assets/mobile/img1.png";
import img2 from "../assets/mobile/img2.png";
import img3 from "../assets/mobile/img3.png";
import img4 from "../assets/mobile/img4.png";
import img5 from "../assets/mobile/img5.png";

const Home = () => {

    const [isMenuOpen,setIsMenuOpen]= useState(false)
    console.log(isMenuOpen);

  return (
    <div>
        <div className={`md:hidden w-full h-screen fixed bg-secondary_blue ml-10  ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col items-end p-5 mr-28 gap-4 text-white font-Bebas text-2xl">
            <img className="cursor-pointer hover:text-indigo-400" onClick={()=>{setIsMenuOpen(false)}} src={close} alt="close" />
            <li className="hover:text-indigo-400">HOME</li>
            <li className="hover:text-indigo-400">RACES</li>
            <li className="hover:text-indigo-400">REGISTER</li>
            <li className="hover:text-indigo-400">FAQ</li>
            <li className="hover:text-indigo-400">CONTACT</li>
          </ul>
        </div>
      <div className={`fixed flex w-full justify-between z-10 ${isMenuOpen ? 'hidden' : 'flex'}`}>
        <div className="bg-black font-Bebas text-white h-11 px-6 py-4 flex justify-center items-center ml-5 md:ml-40 md:h-16  md:text-4xl">
          <span className="text-indigo-400">DRONES.</span>
          SERIES
        </div>
          <div className="md:hidden" onClick={()=>setIsMenuOpen(true)}>
              <div class="space-y-2 p-3">
                <div class="w-8 h-1 bg-black"></div>
                <div class="w-8 h-1  bg-black"></div>
                <div class="w-8 h-1  bg-black"></div>
              </div>
          </div>
          
          <div className="hidden md:block">
            <ul className="flex flex-row w-full gap-10 pt-4 pr-48 hidden md:flex text-2xl text-white font-Bebas hover:cursor-pointer ">
                <li className="hover:text-indigo-400">HOME</li>
                <li className="hover:text-green-400">RACES</li>
                <li className="hover:text-green-400">REGISTER</li>
                <li className="hover:text-green-400">FAQ</li>
                <li className="hover:text-green-400">CONTACT</li>
            </ul>
          </div>
      </div>

      {/*first section*/}
      <div className=" ml-10 h-screen flex md:ml-64">
        <div className="h-full w-4/5 bg-bg_mobile bg-cover bg-no-repeat flex justify-center items-center flex-col text-center md:row md:bg-bg_web md:flex-row md:w-4/6">
          <div className="md:flex md:flex-col md:absolute md:left-40 md:w-96 ">
            <h1 className="text-5xl font-Bebas leading-11 md:text-8xl md:text-start ">
              DRONE RACING GONE WILD
            </h1>
            <p className="text-lg font-Monserrat md:text-start md:text-2xl">
              Register now for the ultimate drone racing event. 5 mile courses
              and over $10 million in prize money!
            </p>
          </div>
          <img
            className="mt-20  h-40 w-48 md:h-65 md:w-65 md:absolute md:top-48 md:right-64  "
            src={drone}
            alt="drone"
          />
        </div>
        <div className=" bg-primary_blue h-full w-1/5 md:w-2/6"></div>
      </div>
      {/*second section*/}
      <div className=" ml-10 bg-bg2_mobile bg-cover bg-no-repeat h-screen md:ml-64 md:bg-bg2_web md:flex md:justify-center md:items-center  ">
        <h1 className="text-slate-50 font-Bebas text-2xl pt-16 px-10 md:text-5xl md:w-1/2  ">
          “the stadium is simply unreal. scrimba hall will make this the best
          drone racing event ever, period.”
          <span className=" flex justify-center items-center mt-8 gap-1 md:justify-start">
            <span className="w-5 h-0.5 bg-white block"></span>
            <span className="text-lg md:text-2xl">anonymous guy</span>
          </span>
        </h1>
      </div>
      {/*third section*/}
      <div className=" flex flex-col ml-10  md:ml-64 md:flex-row">
        <div className="md:flex md:flex-col md:relative md:-left-40 md:w-96 ">
          <h1 className="font-Bebas text-4xl pt-16 mb-10 md:text-8xl md:text-start ">
            last year’s footage
          </h1>
          <p className=" font-Monserrat text-lg md:text-2xl">
            With over 5,000 participants, 2020 featured some of the most amazing
            drone races from the most competitive field ever seen.
            <br />
            <br />
            in 2021, we’re about to double the excitement with 10,000 race
            participants and 100,000 fans!
          </p>
        </div>
        <div className="grid grid-cols-3 grid-rows-3 h-72 w-72 self-end mt-10 mb-10 md:h-3/4 md:w-3/4 md:relative md:-top-32">
          <div className="h-24 w-24 "></div>
          <div className="">
            <img className="h-full w-full" src={img1} alt="" />
          </div>
          <div>
            <img className="h-full w-full" src={img2} alt="" />
          </div>
          <div>
            <img className="h-full w-full" src={img3} alt="" />
          </div>
          <div>
            <img className="h-full w-full" src={img4} alt="" />
          </div>
          <div></div>
          <div></div>
          <div>
            <img className="h-full w-full" src={img5} alt="" />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
