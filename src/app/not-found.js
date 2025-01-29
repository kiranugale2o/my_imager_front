// // pages/404.js
// "use client";

// import { sendOnMyimager } from "myimager";
// import { useState } from "react";

// export default function Custom404() {
//   const [image, setImage] = useState(null);

//   const handleFileChange = async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       try {
//         const result = await sendOnMyimager(file); // Wait for the upload to complete
//         if (result && result.url) {
//           console.log("File uploaded successfully:", result.url);
//           setImage(result.url); // Update the image state with the URL
//         } else {
//           console.error("Upload failed, no URL returned:", result);
//         }
//       } catch (error) {
//         console.error("Error uploading file:", error); // Log the error
//       }
//     }
//   };
//   return (
//     <div className="h-screen bg-black flex justify-center items-center text-center text-white">
//       <h1>Upload an Image</h1>
//       <input type="file" accept="image/*" onChange={handleFileChange} />
//       <div className="bg-dark-gray p-8 rounded-lg shadow-xl">
//         <h1 className="text-5xl font-bold text-red-500 mb-4">404</h1>
//         <h2 className="text-3xl font-semibold mb-6">Oops! Page Not Found</h2>
//         <p className="text-lg text-gray-300 mb-6">
//           Sorry, the page you’re looking for doesn’t exist.
//         </p>
//         <a
//           href="/"
//           className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition-colors"
//         >
//           Go Back to Home
//         </a>
//       </div>
//     </div>
//   );
// }

"use client";

import { getImage } from "@/actions";

import { useState } from "react";
//import { uploadImage } from "imager2"; // Correct way to import

export default function Custom404() {
  const [image, setImage] = useState(null);

  // Handle file upload (Remove the sendOnMyimager code temporarily)
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const res = await getImage(file);
      console.log("File selected:", res);
      // No sendOnMyimager call for now
    }
  };

  return (
    <div className="h-screen bg-black flex justify-center items-center text-center text-white">
      <h1>Upload an Image</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <div className="bg-dark-gray p-8 rounded-lg shadow-xl">
        <h1 className="text-5xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Oops! Page Not Found</h2>
        <p className="text-lg text-gray-300 mb-6">
          Sorry, the page you’re looking for doesn’t exist.
        </p>
        <a
          href="/"
          className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition-colors"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
}
