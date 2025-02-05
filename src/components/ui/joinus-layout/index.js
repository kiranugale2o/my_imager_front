"use client";

import React, { useState } from "react";

const JoinUsLayout = () => {
  // Separate states for each field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/api/joinus", {
      method: "POST",
      body: JSON.stringify({
        data: {
          name,
          email,
          linkedin,
          github,
          message,
        },
      }),
    }).then((res) =>
      res.json().then((res) => {
        if (res.success) {
          alert(res.message);
        } else {
          console.log(res.message);

          alert(res.message);
        }
      })
    );
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-red-300  p-1 via-red-500 to-purple-600 bg-clip-text  text-transparent  mb-8">
          Join MyImager Today
        </h1>
        <p className="text-xl text-gray-300 text-center mb-12">
          Be part of a community of developers and creators who trust MyImager
          for seamless image storage and management in the cloud.
        </p>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold  bg-gradient-to-r from-red-300  p-1 via-red-500 to-purple-600 bg-clip-text  text-transparent mb-4">
              Seamless Upload
            </h3>
            <p className="text-gray-300">
              Upload images effortlessly and store them securely in the cloud
              with just a few lines of code.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold  bg-gradient-to-r from-red-300  p-1 via-red-500 to-purple-600 bg-clip-text  text-transparent mb-4">
              Reliable Storage
            </h3>
            <p className="text-gray-300">
              Enjoy secure, scalable storage with 99.9% uptime for all your
              images and media files.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold  bg-gradient-to-r from-red-300  p-1 via-red-500 to-purple-600 bg-clip-text  text-transparent mb-4">
              Fast Delivery
            </h3>
            <p className="text-gray-300">
              Images are delivered quickly with optimized performance, ensuring
              a fast and seamless user experience.
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold  bg-gradient-to-r from-red-300  p-1 via-red-500 to-purple-600 bg-clip-text  text-transparent mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Sign up now to unlock your account, start uploading, and leverage
            MyImager’s powerful cloud storage solutions.
          </p>
          <a
            href="#joinForm"
            className="px-8 py-3  bg-gradient-to-r from-red-300  p-1 via-red-500 to-purple-600 bg-clip-text  text-transparent text-white text-xl rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            Join Us Now
          </a>
        </div>

        <div className="bg-gray-800 p-8 rounded-xl shadow-xl">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-red-300  p-1 via-red-500 to-purple-600 bg-clip-text  text-transparent  mb-6 text-center">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-semibold text-gray-300 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-gray-300 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label
                htmlFor="linkedin"
                className="block text-lg font-semibold text-gray-300 mb-2"
              >
                LinkedIn Profile (Optional)
              </label>
              <input
                type="url"
                id="linkedin"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                className="w-full p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your LinkedIn profile URL"
              />
            </div>

            <div>
              <label
                htmlFor="github"
                className="block text-lg font-semibold text-gray-300 mb-2"
              >
                GitHub Profile (Optional)
              </label>
              <input
                type="url"
                id="github"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
                className="w-full p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your GitHub profile URL"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg font-semibold text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows="5"
                className="w-full p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Tell us why you want to join MyImager"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3  bg-gradient-to-r from-red-300  p-1 via-red-500 to-purple-600 bg-clip-text  text-transparent text-white text-xl rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="p-10"></div>
    </div>
  );
};

export default JoinUsLayout;
