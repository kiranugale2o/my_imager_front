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
        <section className="bg-black w-full text-white bg-[url('/bg.jpg')]  border-none bg-cover">
          <div className="mx-auto max-w-screen-xl px-4 py-20 lg:py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="bg-gradient-to-r from-red-300  p-1 via-red-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
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
                  href="/dashboard"
                >
                  Try it Now—Free for Developers
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-5 mt-[14px]">
          <div className="overflow-hidden  lg:absolute lg:left-[30%] lg:w-[500px] bg-black lg:border-b border-gray-900">
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
          <p className="text-sm text-gray-600 mx-[70px] lg:mx-0 absolute lg:left-[40%]  mt-[50px] font-bold">
            This are our trusted partners.
          </p>
        </section>

        <section className=" w-full block lg:flex mt-10 lg:mt-20 py-10 border-t border-gray-800 ">
          <div className="flex flex-col w-full justify-between">
            <div className="flex flex-col w-full">
              <div className="container mx-auto lg:p-6">
                <h2 className="opacity-100 text-4xl ml-4 lg:text-6xl lg:mx-auto font-sans font-extralight">
                  Organize Your Media with Ease
                </h2>
                <p className="text-lg py-5 p-2 lg:p-auto lg:w-[600px]  mx-auto text-gray-400 ">
                  With MyImager, you can effortlessly categorize and organize
                  your images and videos into folders and albums. Two Steps Only
                  !
                </p>
              </div>
            </div>
            <div className="w-full block lg:flex">
              <div className="lg:ml-10 flex p-4 lg:p-0 flex-col mt-10   banner mx-auto w-full lg:w-[500px]">
                <img
                  src="/integration.png"
                  alt="integration banner"
                  className="object-contain shadow-lg   shadow-gray-200 border rounded-lg w-full h-full"
                />
                <span className="text-lg font-bold text-gray-400  mx-auto border rounded-lg mt-5 p-1">
                  Project Integration
                </span>
              </div>
              <div className="lg:ml-10 flex p-4 lg:p-0  flex-col mt-10  banner mx-auto w-full lg:w-[500px]">
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
        <section className="flex w-full py-0">
          {/* <div className="flex flex-col w-full"></div> */}
          <div className="relative left-[50%] lg:w-[600px] transform -translate-x-[50%]">
            {/* TV Image */}
            <img
              src="/tv.png"
              alt="tv"
              className="opacity-100 z-100 object-contain w-full h-full"
            />

            {/* Video */}
            <video
              className="absolute opacity-70 z-100 top-[55px] left-[45px] lg:top-[100px] lg:left-[80px] w-[270px]  lg:w-[430px] lg:h-[240px] object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="myimager.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section className=" w-full block lg:flex  py-10 border-t border-gray-800 ">
          <div className="block lg:flex  w-full justify-between">
            <div className="flex flex-col w-full">
              <div className="container mx-auto lg:p-6">
                <h2 className="text-4xl ml-4 lg:text-6xl lg:mx-auto font-sans font-extralight">
                  Just Call The MyImager Functions !
                </h2>
                <p className="text-lg py-5 p-2 lg:p-auto lg:w-[600px]  mx-auto text-gray-400 ">
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
                    <span className="text-cyan-500">{`{ sendOnMyimager }`}</span>
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
                    {`result =`}
                    <span className="text-cyan-500 underline">{`sendOnMyimager`}</span>
                    {`(file, `}
                    <span className="text-orange-500">{`MYIMAGER_CLIENT_KEY`}</span>
                    {`, `}
                    <span className="text-orange-500">{`PROJECT_KEY`}</span>
                    {`);`}
                  </code>

                  {/* Calling setUrl */}
                  <code>
                    <span className="text-white">{`setUrl(result.url);`}</span>
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

        <section id="features" className="features hidden mt-[54px]">
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
              <img src="/ai.jpg" alt="Character Storage" />
              <h3>AI Integration</h3>
              <p>We provide functions that work like a AI.</p>
            </div>
          </div>
        </section>

        <section className="w-full py-10 border-t border-gray-800 flex flex-col justify-between">
          <div className="w-full flex flex-col">
            <h2 className="text-4xl ml-4 lg:text-6xl lg:mx-auto font-sans font-extralight">
              Who We Are And What We Do ?
            </h2>
            <div className="text-lg mt-4 px-5  text-gray-400">
              So we are not just a image storage website we provide a tools and
              package to the developer to handle media like
              images,video,audio,..etc. We work like a employe of the developer
              to handle this media so developer no need to learn more things
              about the storage and the main feature is we are provide this
              services at zero charge . the most important part are the we are
              use the firebase to securely storage your media. we provide high
              Security of authentication.
            </div>
            <div className="container flex mx-auto px-4 py-10">
              <div className="  text-center mb-10">
                <h1 className="text-4xl  ml-4 lg:text-4xl lg:mx-auto font-sans font-extralight">
                  Empowering Developers with Secure, Effortless Media Management
                </h1>
                <p className="mt-4 text-lg text-gray-400">
                  At Myimager, we understand the challenges developers face when
                  it comes to managing and storing media like images, videos,
                  and audio. That's why we've created a comprehensive suite of
                  tools and services designed to handle your media needs so you
                  can focus on what you do best: coding and building amazing
                  products.
                </p>
                <p className="mt-4 text-lg text-gray-400">
                  We go beyond being just a media storage platform. Think of us
                  as your personal employee, exclusively dedicated to managing
                  your media. With our powerful tools, you won’t have to learn
                  anything new about storage or worry about handling complex
                  tasks—because we do the heavy lifting for you.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-semibold border-b border-gray-800 p-5 text-gray-200 text-center mb-6">
                  Why Choose Us?
                </h2>
                <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-transparent border border-gray-900 shadow-lg shadow-red-600  p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-400">
                      Zero Charge, Unlimited Possibilities
                    </h3>
                    <p className="mt-2 text-gray-600">
                      We believe that developers should have access to essential
                      tools without worrying about fees. That's why we provide
                      our media storage and management services absolutely free.
                      Whether you're storing images, videos, or audio files, you
                      can rely on us to handle all your media needs at zero
                      cost.
                    </p>
                  </div>

                  <div className="bg-transparent border border-gray-900 shadow-lg shadow-red-600 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-400">
                      Seamless Media Management
                    </h3>
                    <p className="mt-2 text-gray-600">
                      With our tools, you can easily upload, organize, retrieve,
                      and manipulate media files. Whether it's for your website,
                      app, or any other project, our platform allows you to
                      seamlessly manage your media without ever leaving your
                      development environment.
                    </p>
                  </div>

                  <div className="bg-transparent border border-gray-900 shadow-lg shadow-red-600 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-400">
                      Top-Notch Security with Firebase
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Security is our top priority. We use Firebase as our
                      trusted backend to securely store your media, ensuring
                      that all your files are protected with the latest industry
                      standards. Firebase provides robust authentication, making
                      it easy for you to manage access and ensure that only
                      authorized users can access your sensitive media.
                    </p>
                  </div>

                  <div className="bg-transparent border border-gray-900 shadow-lg shadow-red-600 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-400">
                      Easy Authentication and Access Control
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Our service comes equipped with high-level authentication
                      features powered by Firebase, giving you granular control
                      over who can access or upload media. Whether you need
                      temporary access for a user or long-term authentication,
                      our platform has you covered with a user-friendly system
                      designed to secure your media and make development
                      smoother.
                    </p>
                  </div>

                  <div className="bg-transparent border border-gray-900 shadow-lg shadow-red-600 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-400">
                      Developer-Friendly Tools
                    </h3>
                    <p className="mt-2 text-gray-600">
                      We’ve crafted our platform with the developer in mind. You
                      don’t need to learn complicated storage solutions or
                      infrastructure management. Our tools integrate easily with
                      your existing projects, and you can access everything via
                      simple API calls or a user-friendly interface. With our
                      help, you’ll be able to streamline your media handling and
                      speed up your workflow.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-3xl font-semibold text-gray-200 text-center mb-6">
                  Features at a Glance
                </h2>
                <ul className="list-disc pl-8 text-lg text-gray-400">
                  <li>
                    Secure Media Storage: We use Firebase’s secure cloud storage
                    to ensure the safety of your images, videos, audio, and
                    more.
                  </li>
                  <li>
                    Zero Charges: No hidden fees. Enjoy robust media storage at
                    absolutely no cost.
                  </li>
                  <li>
                    Developer-Focused Tools: Simplified, intuitive tools
                    designed to integrate seamlessly with your workflow.
                  </li>
                  <li>
                    Advanced Authentication: Firebase-powered authentication
                    ensures only authorized users access your media.
                  </li>
                  <li>
                    Effortless Media Management: Upload, organize, and retrieve
                    media with ease using our simple tools and APIs.
                  </li>
                </ul>
              </div>

              <div className="mt-10">
                <h2 className="text-3xl font-semibold text-gray-200 text-center mb-6">
                  How It Works
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8 bg-green-500 text-white rounded-full flex items-center justify-center">
                      1
                    </div>
                    <p className="ml-4 text-lg text-gray-400">
                      Sign Up: Create an account and set up your secure storage
                      space in seconds.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8 bg-green-500 text-white rounded-full flex items-center justify-center">
                      2
                    </div>
                    <p className="ml-4 text-lg text-gray-400">
                      Integrate with your project: Integrate & Upload your media
                      files—whether it's an image, video, or audio file.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8 bg-green-500 text-white rounded-full flex items-center justify-center">
                      3
                    </div>
                    <p className="ml-4 text-lg text-gray-400">
                      Manage Access: Use our built-in authentication tools to
                      set who can access or upload media.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8 bg-green-500 text-white rounded-full flex items-center justify-center">
                      4
                    </div>
                    <p className="ml-4 text-lg text-gray-400">
                      Enjoy the Freedom: With everything securely stored, focus
                      on building your app while we handle the storage,
                      security, and management for you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10  text-center">
                <h2 className="text-3xl font-semibold text-gray-400 mb-6">
                  Take Your Media Storage to the Next Level
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Join us at Myimager and revolutionize the way you manage media
                  in your development projects. Enjoy the convenience of secure,
                  free, and developer-friendly tools, backed by industry-leading
                  storage solutions.
                </p>
                <a
                  href="/dashboard"
                  className="inline-block bg-red-400 text-white py-2 px-6 rounded-full text-lg hover:bg-red-500 transition "
                >
                  Start using our service today and experience the difference!
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
