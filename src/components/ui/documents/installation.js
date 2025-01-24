import { ArrowLeftIcon, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Installation() {
  return (
    <>
      <div className="font-sans p-8 ">
        <h1 className="bg-gradient-to-r from-red-300 via-red-500 to-purple-600 bg-clip-text text-[25px] font-extrabold text-transparent ">
          Installation
        </h1>
        <p className="text-lg text-white mb-6">
          How to install MyImager And use in Your app .
        </p>
        <p className="text-2xl border-b p-2 ">Frameworks</p>

        <div className="flex flex-wrap gap-5 w-full">
          <Link href="/docs/nextjs" className="text-white">
            <div className="mt-5 flex flex-col h-[140px] w-[300px] shadow-md hover:shadow-lg bg-white text-black  rounded-md border">
              <div className="flex flex-col  p-5 py-6 mx-auto">
                <img src="/nextjs.png" alt="next js" width={50} height={69} />
                <p className="text-[18px] font-semibold">Next.js</p>
              </div>
            </div>
          </Link>

          <Link href="/docs/vitejs" className="text-white">
            <div className="mt-5 flex flex-col h-[140px] w-[300px] shadow-md bg-white text-black hover:shadow-lg  rounded-md border">
              <div className="flex flex-col  p-5 py-6 mx-auto">
                <img src="/vite.png" alt="next js" width={50} height={69} />
                <p className="text-[18px] font-semibold">Vite</p>
              </div>
            </div>
          </Link>

          <Link href="/docs/Remix" className="text-white">
            <div className="mt-5 flex flex-col h-[140px] w-[300px] shadow-md bg-white text-black hover:shadow-lg  rounded-md border">
              <div className="flex flex-col  p-5 py-6 mx-auto">
                <img src="/remix.png" alt="next js" width={120} height={89} />
              </div>
            </div>
          </Link>

          <Link href="/docs/astro" className="text-white">
            <div className="mt-5 flex flex-col h-[140px] w-[300px] shadow-md bg-white text-black hover:shadow-lg  rounded-md border">
              <div className="flex flex-col  p-5 py-6 mx-auto">
                <img src="/astro.png" alt="next js" width={50} height={69} />
                <p className="text-[18px] font-semibold">Astro</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="font-sans lg:p-8">
          <h1 className="  border-b p-5 font-bold text-start text-2xl text-white mb-6">
            JavaScript Guide
          </h1>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-300 mb-4">
              Project Written in JavaScript
            </h2>
            <p className="text-lg text-white mb-4">
              This project and the components are written in{" "}
              <strong>JavaScript</strong>. We recommend using JavaScript for
              your project as well to take full advantage of the type-safety,
              auto-completion, and other features it provides.
            </p>
            <p className="text-lg text-white">
              However, we also provide a JavaScript version of the components
              for those who prefer JavaScript. The JavaScript version is
              available via the CLI.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-300 mb-4">
              Opting Out of JavaScript
            </h2>
            <p className="text-lg text-white mb-4">
              If you prefer not to use JavaScript, you can opt-out by using the{" "}
              <code className="bg-black text-white border px-2 py-1 rounded">
                tsx
              </code>{" "}
              flag in your{" "}
              <code className="bg-black text-white border px-2 py-1 rounded">
                components.json
              </code>{" "}
              file.
            </p>
            <pre className="bg-white p-4 rounded-md mb-6">
              <code className="text-black overflow-scroll lg:overflow-none ">
                {`components.json`}
                {`{
  "style": "default",
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/app/globals.css",
    "baseColor": "zinc",
    "cssVariables": true
  },
  "rsc": false,
  "tsx": false,
  "aliases": {
    "utils": "~/lib/utils",
    "components": "~/components"
  }
}`}
              </code>
            </pre>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-300 mb-4">
              Configure Import Aliases
            </h2>
            <p className="text-lg text-white mb-4">
              To configure import aliases in your project, you can use the
              following{" "}
              <code className="bg-black text-white border px-2 py-1 rounded">
                jsconfig.json
              </code>{" "}
              file:
            </p>
            <pre className="bg-white p-4 rounded-md">
              <code className="text-black">
                {`jsconfig.json`}
                {`{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}`}
              </code>
            </pre>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-300 mb-4">
              Conclusion
            </h2>
            <p className="text-lg text-white">
              Whether you choose JavaScript or JavaScript, the components are
              ready to be integrated into your project. If you prefer
              JavaScript, simply follow the instructions to opt-out of
              JavaScript and use the JavaScript version with the CLI.
            </p>
          </section>
        </div>

        <div className="justify-between flex">
          <Link href="/docs" className="text-white">
            <p className="text-end  p-2 px-5 border ">
              <ArrowLeftIcon />
            </p>
          </Link>
          <Link href="/docs/changelog" className="text-white">
            <p className="text-end p-2 px-5  border ">
              <ArrowRight />{" "}
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
