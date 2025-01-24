import { BookLockIcon } from "lucide-react";
import React from "react";

const AccessTokenPage = () => {
  return (
    <div className=" text-gray-300">
      {/* Header Section */}
      <header className=" text-white py-6">
        <div className="text-start">
          <h1 className="text-3xl flex p-5 border-b font-sans font-extralight">
            MyImager Access Token
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="  lg:p-8">
        {/* What is an Access Token */}
        <section className="mb-8 w-full">
          <h2 className="text-2xl font-semibold">What is an Access Token?</h2>
          <p className="mt-2 w-[350px] lg:w-full text-lg ">
            An Access Token is a unique string used to authenticate and
            authorize access to the MyImager API. It ensures that only
            authorized users can perform actions like uploading, managing, or
            retrieving images.
          </p>
        </section>

        {/* How to Use the Access Token */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold">Access Token</h2>

          <pre className="mt-3 bg-black w-full text-wrap h-[80px] px-4 lg:px-10 text-white border rounded">
            {`
<Your MYIMAGER_CLIENT_KEY>
                
            `}
          </pre>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold">
            How to Obtain Your Project Access Token Key ?
          </h2>
          <ol className="list-decimal list-inside mt-2 text-lg">
            <li>Log in to your MyImager account.</li>
            <li>Navigate to the Dashboard section in your account settings.</li>
            <li>Click on the "All Project" button to Access Token.</li>
            <li>
              After select one project that you want to use after click on
              "Project Integration" button inside that you can see access token.
            </li>
            <li>
              Copy the token and store it securely, as it will be needed for
              making API requests.
            </li>
          </ol>
        </section>

        {/* Security Tips */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold">Security Tips</h2>
          <ul className="list-disc list-inside mt-2 text-lg">
            <li>Never share your access token publicly.</li>
            <li>
              Store your token securely (e.g., in environment variables or
              secure vaults).
            </li>
            <li>
              Regenerate your access token if you suspect it has been
              compromised.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AccessTokenPage;
