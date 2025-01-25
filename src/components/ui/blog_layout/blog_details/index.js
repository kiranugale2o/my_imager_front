import React from "react";

const BlogDetailPage = () => {
  return (
    <div className="max-w-3xl  mx-auto px-4 py-8">
      {/* Blog Image */}
      <div className="w-full h-96">
        <img
          className="w-full h-full object-cover rounded-lg shadow-md"
          src="/firebase.jpg"
          alt="Blog Post"
        />
      </div>

      {/* Blog Title and Metadata */}
      <div className="mt-6">
        <h1 className="text-4xl font-bold text-gray-300">Blog Post Title</h1>
        <div className="flex items-center space-x-4 text-gray-500 mt-2">
          <span>
            by <strong>John Doe</strong>
          </span>
          <span>•</span>
          <span>January 23, 2025</span>
        </div>
      </div>

      {/* Blog Content */}
      <div className="mt-6 text-gray-500">
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel
          orci a odio tincidunt fermentum. Fusce a elit mollis, dictum urna at,
          pharetra ligula. Integer vulputate augue nec risus gravida, sit amet
          fermentum ipsum pharetra.
        </p>
        <p className="mb-4">
          Donec a turpis fringilla, vulputate arcu non, vehicula orci. Integer
          sed mollis ligula. Fusce interdum nulla vel dui sollicitudin, at
          volutpat turpis auctor. Ut a eros ut nulla porttitor aliquet. Morbi ac
          orci velit. Aenean tristique interdum risus, et dictum lorem aliquet
          a.
        </p>
        <p className="mb-4">
          Etiam non sapien neque. Curabitur nec mollis lorem. In vitae dui
          tincidunt, dapibus tortor ac, fermentum dui. Aliquam erat volutpat.
          Suspendisse potenti. Nulla facilisi. Nulla tristique, eros eget
          rhoncus tristique, sapien elit interdum turpis, ac efficitur enim
          risus sed magna.
        </p>
      </div>

      {/* "Back to Blog List" Button */}
      <div className="mt-8 text-center">
        <a
          href="/blog"
          className="inline-block px-6 py-2 text-white bg-teal-600 hover:bg-teal-700 rounded-md font-medium"
        >
          Back to Blog List
        </a>
      </div>
    </div>
  );
};

export default BlogDetailPage;
