"use client";
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

        <section id="features" className="features">
          <div className="container">
            <h2 className="section-title">Features</h2>

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
