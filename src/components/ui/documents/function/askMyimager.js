import React from "react";

const AskMyimagerExplanation = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-indigo-600 mb-6">
        askMyimager Function Overview
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        The{" "}
        <code className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-md">
          askMyimager(prompt)
        </code>{" "}
        function is a tool designed for developers to interface with an AI or
        image processing system via text prompts. It allows users to submit
        queries or requests and receive responses or generated content based on
        those inputs, much like ChatGPT or other AI models.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
        How It Works
      </h2>
      <ol className="list-decimal list-inside text-lg text-gray-700 space-y-3">
        <li>
          <strong className="font-bold text-indigo-600">Input:</strong>{" "}
          Developers submit a text prompt to the function, which can be a
          question, request, or instruction.
        </li>
        <li>
          <strong className="font-bold text-indigo-600">Processing:</strong> The
          system processes the prompt and interprets the request using its AI
          model or algorithm.
        </li>
        <li>
          <strong className="font-bold text-indigo-600">Response:</strong> The
          function returns a response based on the prompt, which could be text,
          images, or other actions.
        </li>
      </ol>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
        Example Use Cases
      </h2>
      <ul className="space-y-4">
        <li className="bg-indigo-100 p-4 rounded-lg hover:bg-indigo-200 transition-colors">
          <strong className="text-indigo-600">Text Generation:</strong>
          <pre className="bg-gray-800 text-white p-2 rounded-md mt-2">
            {`Prompt: "Write a short poem about the sea."`}
            {`\nResponse: "The waves crash against the shore, / A melody that calls once more."`}
          </pre>
        </li>
        <li className="bg-indigo-100 p-4 rounded-lg hover:bg-indigo-200 transition-colors">
          <strong className="text-indigo-600">Image Generation:</strong>
          <pre className="bg-gray-800 text-white p-2 rounded-md mt-2">
            {`Prompt: "Generate an image of a futuristic city at sunset."`}
            {`\nResponse: An image of a glowing, high-tech city with a dramatic sunset.`}
          </pre>
        </li>
        <li className="bg-indigo-100 p-4 rounded-lg hover:bg-indigo-200 transition-colors">
          <strong className="text-indigo-600">Data Querying:</strong>
          <pre className="bg-gray-800 text-white p-2 rounded-md mt-2">
            {`Prompt: "What’s the current temperature in New York?"`}
            {`\nResponse: "The current temperature in New York is 34°F."`}
          </pre>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
        Benefits
      </h2>
      <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
        <li>
          <strong className="font-bold text-indigo-600">
            Ease of Integration:
          </strong>{" "}
          Developers can easily integrate{" "}
          <code className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-md">
            askMyimager
          </code>{" "}
          into their applications to handle dynamic user queries.
        </li>
        <li>
          <strong className="font-bold text-indigo-600">Flexibility:</strong>{" "}
          The function can handle a wide variety of prompts, from basic to
          complex requests, depending on the underlying system.
        </li>
        <li>
          <strong className="font-bold text-indigo-600">Automation:</strong> It
          enables more interactive and automated user experiences in apps or
          websites.
        </li>
      </ul>
    </div>
  );
};

export default AskMyimagerExplanation;
