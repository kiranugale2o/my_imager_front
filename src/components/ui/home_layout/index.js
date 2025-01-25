"use client";
import { brands } from "@/utils";
import KeenSlider from "keen-slider";
import { useEffect, useState } from "react";

export function HomePage() {
  //   useEffect(() => {
  //     const heroSection = document.querySelector(".hero");
  //     heroSection.classList.add("animate");
  //   }, []);
  return (
    <>
      <div className="bg-black">
        <section className="bg-black text-white">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="bg-gradient-to-r from-red-300 via-red-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                Build Better Apps with Powerful
                <span className="sm:block"> Image Storage. </span>
              </h1>

              <p className="mx-auto mt-5 max-w-xl sm:text-xl/relaxed">
                Simplify image storage with our fast, reliable platform built
                for developers. Upload, manage, and access your images
                effortlessly with our easy-to-integrate API, perfect for any web
                or mobile project.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  className="block w-full rounded-full border border-red-300  px-12 py-3 text-sm font-medium text-white hover:bg-red-400 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                  href="#"
                >
                  Try it Now—Free for Developers
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-5">
          <div className="overflow-hidden  lg:absolute lg:left-[30%] lg:w-[500px] bg-black border-b border-gray-900">
            <div className="flex animate-marquee space-x-12">
              {brands.map((d) => {
                return (
                  <div
                    key={d.url}
                    className="text-xl p-3 font-semibold text-gray-400 font-sans font-extralight flex items-center justify-center  bg-black"
                  >
                    {d.logo}
                    {d.text}
                  </div>
                );
              })}
            </div>
          </div>
          <p className="text-sm text-gray-600 mx-[60px] lg:mx-0 absolute lg:left-[40%] mt-[60px] font-bold">
            This are our trusted partners.
          </p>
        </section>

        <section className=" w-full block lg:flex mt-10 lg:mt-40 py-10 border-t border-gray-800 ">
          <div className="flex flex-col w-full justify-between">
            <div className="flex flex-col w-full">
              <div className="container mx-auto lg:p-6">
                <h2 className="opacity-100 text-4xl ml-4 lg:text-6xl lg:mx-auto font-sans font-extralight">
                  Organize Your Media with Ease
                </h2>
                <p className="text-lg py-5 p-2 lg:p-auto lg:w-[600px]  mx-auto text-gray-700 ">
                  With MyImager, you can effortlessly categorize and organize
                  your images and videos into folders and albums. Two Steps Only
                  !
                </p>
              </div>
            </div>
            <div className="w-full block lg:flex">
              <div className="lg:ml-10 flex flex-col mt-10   banner mx-auto w-full lg:w-[500px]">
                <img
                  src="/integration.png"
                  alt="integration banner"
                  className="object-contain shadow-lg   shadow-gray-200 border rounded-lg w-full h-full"
                />
                <span className="text-lg font-bold text-gray-400  mx-auto border rounded-lg mt-5 p-1">
                  Project Integration
                </span>
              </div>
              <div className="lg:ml-10 flex  flex-col mt-10  banner mx-auto w-full lg:w-[500px]">
                <img
                  src="/storage.png"
                  alt="storage banner"
                  className="object-contain shadow-lg   shadow-gray-200  border rounded-lg w-full h-full"
                />
                <span className="text-lg font-bold text-gray-400  mx-auto border rounded-lg mt-5 p-1">
                  Use Storage
                </span>
              </div>
            </div>
            {/* <div className="feature mx-auto">
              <img src="firebase.jpg" alt="Character Storage" />
              <h3>We Use Firebase To Seff Your Images</h3>
            </div> */}
          </div>
        </section>

        <section className=" w-full block lg:flex  py-10 border-t border-gray-800 ">
          <div className="block lg:flex  w-full justify-between">
            <div className="flex flex-col w-full">
              <div className="container mx-auto lg:p-6">
                <h2 className="text-4xl ml-4 lg:text-6xl lg:mx-auto font-sans font-extralight">
                  Just Call The MyImager Functions !
                </h2>
                <p className="text-lg py-5 p-2 lg:p-auto lg:w-[600px]  mx-auto text-gray-700 ">
                  Don't Need to write multiple lines of code simply call the
                  function and use myimager storage and AI features .
                </p>
              </div>
            </div>
            <div className="w-full block p-5 lg:flex">
              <div className="lg:ml-0 flex  flex-col mt-10  border border-gray-600 shadow-lg   shadow-rose-600  opacity-75 rounded-lg   mx-auto w-full lg:w-[550px]">
                <div className="p-4 grid gap-1  ">
                  {/* Import Statement */}
                  <code>
                    <span className="text-red-500">{`import `}</span>
                    <span className="text-cyan-500">{`{ uploadOnMyimagerAndGetUrl }`}</span>
                    <span className="text-red-500">{` from `}</span>
                    <span className="text-cyan-500">{`"myimager";`}</span>
                    {`;`}
                  </code>

                  {/* Function Declaration for getImageUrl */}
                  <code>
                    <span className="text-red-500">{`function `}</span>
                    <span className="text-green-400">{`getImageUrl`}</span>
                    <span className="text-orange-500">{`(event){`}</span>
                  </code>

                  {/* Variable Declaration for getImageUrl */}
                  <code className="text-orange-500">
                    <span className="text-red-500">{`const `}</span>
                    <span className="text-white">{`file = `}</span>
                    {`event.target.files[0];`}
                  </code>

                  {/* Method Call for getImageUrl */}
                  <code>
                    <span className="text-red-500">{`const `}</span>
                    {`url = `}
                    <span className="text-cyan-500 underline">{`uploadOnMyimagerAndGetUrl`}</span>
                    {`(file, `}
                    <span className="text-orange-500">{`MYIMAGER_CLIENT_KEY`}</span>
                    {`, `}
                    <span className="text-orange-500">{`PROJECT_KEY`}</span>
                    {`);`}
                  </code>

                  {/* Calling setUrl */}
                  <code>
                    <span className="text-white">{`setUrl(url);`}</span>
                  </code>

                  {/* Function Return */}
                  <code>
                    <span className="text-white">{`}`}</span>
                  </code>
                </div>
              </div>
            </div>
            {/* <div className="feature mx-auto">
              <img src="firebase.jpg" alt="Character Storage" />
              <h3>We Use Firebase To Seff Your Images</h3>
            </div> */}
          </div>
        </section>

        <section id="features" className="features mt-24">
          <h2 className="section-title">Features</h2>
          <div className="container">
            <div className="feature">
              <img src="section2img2.jpg" alt="Image Storing" />
              <h3>Image Storage</h3>
              <p>
                Store your images in the cloud with secure and scalable options
                for developers.
              </p>
            </div>

            <div className="feature">
              <video controls>
                <source src="video-placeholder.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h3>Video Support</h3>
              <p>
                Effortlessly store and stream videos with high performance and
                low latency.
              </p>
            </div>

            <div className="feature">
              <img src="section2img1.jpg" alt="Character Storage" />
              <h3>Character & Assets</h3>
              <p>
                Store game characters and assets with optimized file formats for
                quick access.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
