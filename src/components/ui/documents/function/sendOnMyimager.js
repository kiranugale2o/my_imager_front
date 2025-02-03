import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const SendOnMyimager = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8 bg-gray-50 text-black rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-indigo-600 mb-6">
        sendOnMyimager(file, client_key, project_key)
      </h1>

      <h2 className="p-5 text-2xl font-semibold text-indigo-400 hover:text-indigo-500 transition-colors duration-200">
        Purpose:
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        The{" "}
        <code className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-md">
          sendOnMyimager
        </code>{" "}
        function allows developers to upload images to a MyImager account and
        store them in the cloud. After uploading, the function returns essential
        information about the image, such as:
      </p>
      <ul className="mt-4 space-y-3 text-lg text-gray-700 mb-4">
        <li className="">
          <strong className="">URL</strong>: A direct link to access the
          uploaded image.
        </li>
        <li className="">
          <strong className="">Name</strong>: The name of the uploaded image
          file.
        </li>
        <li className="">
          <strong className="">Size</strong>: The size of the image in bytes.
        </li>
      </ul>
      <p className="text-lg font-light text-lg text-gray-700 mb-4 mt-4">
        This function simplifies the image upload process, providing a seamless
        way for developers to store and retrieve image data programmatically.
      </p>

      <h2 className="mt-6 text-2xl font-semibold text-indigo-400 hover:text-indigo-500 transition-colors duration-200">
        Parameters:
      </h2>
      <ul className="text-lg text-gray-700 mb-4 space-y-4">
        <li className="hover:text-gray-900 transition-colors duration-200">
          <strong>file (File or Buffer)</strong>:
          <p>
            The image file you want to upload to MyImager. This could be a file
            object, a Buffer (binary data), or a path to the image file. It
            should contain image data (e.g., JPEG, PNG, GIF, etc.).
          </p>
        </li>
        <li className="hover:text-gray-900 transition-colors duration-200">
          <strong>client_key (string)</strong>:
          <p className="">
            A unique client key associated with the developer's MyImager
            account. This key ensures the developer has permission to upload
            images.
          </p>
        </li>
        <li className="hover:text-gray-900 transition-colors duration-200">
          <strong>project_key (string)</strong>:
          <p className="">
            A unique project key for categorizing and managing uploaded images
            within a specific project or account.
          </p>
        </li>
      </ul>

      <h2 className="mt-6 text-2xl font-semibold text-indigo-400 hover:text-indigo-500 transition-colors duration-200">
        Returns:
      </h2>
      <p className="text-lg font-light text-gray-800">
        The function returns an object containing the following properties:
      </p>
      <ul className="text-lg text-gray-700 mb-4 space-y-3">
        <li className="hover:text-gray-900 transition-colors duration-200">
          <strong>url (string)</strong>: A direct link (URL) to the uploaded
          image stored on MyImager.
        </li>
        <li className="hover:text-gray-900 transition-colors duration-200">
          <strong>name (string)</strong>: The name of the uploaded image file,
          the same as when uploaded.
        </li>
        <li className="hover:text-gray-900 transition-colors duration-200">
          <strong>size (number)</strong>: The size of the uploaded image in
          bytes.
        </li>
      </ul>

      <Tabs defaultValue="Javascript" className="max-w-4xl mt-8 mx-auto">
        <TabsList>
          <TabsTrigger value="Javascript">Javascript</TabsTrigger>
          <TabsTrigger value="React.js">React.js</TabsTrigger>
        </TabsList>

        <TabsContent value="Javascript">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg mt-8">
            <h2 className="text-2xl font-semibold text-indigo-400 mb-4">
              Example: Upload an Image to MyImager
            </h2>
            <pre className="bg-gray-900 p-5 rounded-lg overflow-x-auto">
              <code className="text-gray-300">
                {`
const file = document.querySelector('input[type="file"]').files[0];  // Example: Get the image from a file input field
const client_key = 'your-client-key';
const project_key = 'your-project-key';

sendOnMyimager(file, client_key, project_key)
  .then(response => {
    // Successfully uploaded image, and received the image details
    console.log("Image uploaded successfully!");
    console.log("Image URL:", response.url);
    console.log("Image Name:", response.name);
    console.log("Image Size:", response.size, "bytes");
  })
  .catch(error => {
    console.error("Error uploading image:", error);
  });
            `}
              </code>
            </pre>

            <p className="mt-4 text-gray-400 text-lg">
              This example demonstrates how to upload an image using the{" "}
              <code className="text-indigo-400">sendOnMyimager</code> function.
              It retrieves the image from a file input, uploads it, and logs
              details like the URL, name, and size.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="React.js">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg mt-8">
            <h2 className="text-2xl font-semibold text-indigo-400 mb-4">
              Example: Upload an Image to MyImager (React.js)
            </h2>
            <pre className="bg-gray-900 p-5 rounded-lg overflow-x-auto">
              <code className="text-gray-300">
                {`import React, { useState } from "react";

const ImageUpload = () => {
  const [imageDetails, setImageDetails] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0]; // Get the selected file
    const client_key = "your-client-key"; // Your MyImager client key
    const project_key = "your-project-key"; // Your MyImager project key

    if (file) {
      try {
        const response = await sendOnMyimager(file, client_key, project_key); // Call sendOnMyimager function
        console.log("Image uploaded successfully!");
        console.log("Image URL:", response.url);
        console.log("Image Name:", response.name);
        console.log("Image Size:", response.size, "bytes");

        setImageDetails({
          url: response.url,
          name: response.name,
          size: response.size,
        });

        setError(null);
      } catch (err) {
        console.error("Error uploading image:", err);
        setError("Failed to upload image. Please try again.");
      }
    }
  };

  return (
    <div className="bg-gray-800 p-8 rounded-xl shadow-xl max-w-lg mx-auto mt-10 text-white">
      <h2 className="text-3xl font-semibold text-indigo-400 mb-6">
        Upload an Image to MyImager
      </h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="p-3 mb-6 w-full border-2 border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {error && (
        <div className="text-red-400 p-3 mb-6 border border-red-500 rounded-lg">
          {error}
        </div>
      )}

      {imageDetails && (
        <div className="text-white mt-6">
          <h3 className="text-lg font-semibold text-indigo-300 mb-4">Image Details:</h3>
          <p><strong className="text-indigo-400">Name:</strong> {imageDetails.name}</p>
          <p><strong className="text-indigo-400">Size:</strong> {imageDetails.size} bytes</p>
          <p><strong className="text-indigo-400">URL:</strong> <a href={imageDetails.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">View Image</a></p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
            `}
              </code>
            </pre>

            <p className="mt-4 text-gray-400 text-lg">
              This React.js example demonstrates how to upload an image using
              the <code className="text-indigo-400">sendOnMyimager</code>{" "}
              function. The code handles file input, uploads the image, and
              displays its details, including the image URL, name, and size.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SendOnMyimager;
