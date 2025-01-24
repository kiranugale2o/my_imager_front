import Link from "next/link";
import LeftNavbar from "../headers/leftbar";
import { ArrowRight } from "lucide-react";

export default function DocsCard() {
  return (
    <>
      <div className="font-sans p-8">
        <h1 className="bg-gradient-to-r from-red-300 via-red-500 to-purple-600 bg-clip-text text-[25px] font-extrabold text-transparent ">
          Introduction
        </h1>
        <p className="text-lg  mb-6">
          MyImager is a powerful and easy-to-use image storage service, built to
          help you upload, store, and manage your images with ease. Whether
          you're a developer, designer, or content creator, MyImager simplifies
          image hosting and sharing by providing you with reliable and scalable
          storage solutions.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-500 mb-4">
            What is MyImager?
          </h2>
          <p className="text-lg ">
            MyImager is a cloud-based image hosting service, similar to
            Firebase, designed to store your images and provide fast access
            through a unique URL. With MyImager, you can upload your images,
            manage them efficiently, and easily share the URLs with your users
            or within your applications.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-500 mb-4">
            How does it work?
          </h2>
          <p className="text-lg ">
            Once you upload an image to MyImager, the system stores it securely
            and provides you with a direct URL to access the image. You can then
            use this URL to display or share the image within your application
            or website. It's a hassle-free way to manage your images and scale
            your projects without worrying about storage limitations or
            infrastructure.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-500 mb-4">
            Features
          </h2>
          <ul className="list-disc pl-8 text-lg ">
            <li>Secure and reliable cloud storage</li>
            <li>Fast image upload and retrieval</li>
            <li>
              Simple API for developers to integrate with their applications
            </li>
            <li>Scalable and efficient image hosting</li>
            <li>Generate shareable URLs for easy image distribution</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-500 mb-4">
            Why use MyImager?
          </h2>
          <p className="text-lg  mb-4">
            MyImager is designed to simplify your image storage process. Instead
            of worrying about setting up servers, managing file systems, or
            dealing with scalability issues, you can focus on building great
            applications while MyImager takes care of the rest.
          </p>
          <p className="text-lg ">
            It's easy to get started, and whether you're working on a small
            project or a large-scale application, MyImager can scale with your
            needs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-500 mb-4">
            Get Started
          </h2>
          <p className="text-lg ">
            To begin using MyImager, simply sign up for an account and start
            uploading your images. You’ll get your image URLs right away, ready
            to use wherever you need them!
          </p>
        </section>
        <Link href="/docs/installation" className="text-gray-600">
          <p className="mt-10 text-end p-2 px-5 w-[60px]  border ">
            <ArrowRight />{" "}
          </p>
        </Link>
      </div>
    </>
  );
}
