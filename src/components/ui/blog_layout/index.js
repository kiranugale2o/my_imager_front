export default function BlogPage() {
  return (
    <>
      <div className="flex flex-col w-full justify-between">
        <div className="flex w-full  mt-10 mx-[10px] lg:mx-0">
          <div className="flex  gap-5 bg-white">
            <div class="    w-[172px] h-[56px]  bg-white">
              <div class="w-[93px] px-5 h-[58px] font-bold text-[48px] leading-[58px] flex items-center text-black">
                Blog
              </div>
            </div>
          </div>
          <div class="    w-[172px] h-[56px]  bg-black">
            <div class=" w-[153px] p-5 h-[58px] font-bold text-[48px] leading-[58px] flex items-center text-white">
              World
            </div>
          </div>
        </div>

        <div className="w-full mt-10 p-10">
          <div className="w-[300px] rounded overflow-hidden shadow-lg bg-white">
            <img
              className="w-full h-48 object-cover"
              src="/firebase.jpg"
              alt="Blog image"
            />
            <div className="px-6 py-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Blog Post Title
              </h2>
              <p className="text-gray-700 text-base mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                at tristique risus, a placerat augue.
              </p>
            </div>
            <div className="px-6 py-4">
              <a
                href="/blog-post"
                className="text-teal-600 hover:text-teal-800 text-sm font-medium"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
