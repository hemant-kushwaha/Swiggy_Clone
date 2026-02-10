export default function RestShimmer({ count }) {
  return (
    <div>
      <div className="w-[76%] mx-auto mt-15">
        <div className="h-13 w-40 bg-gray-300 rounded mb-2"></div>
        <div className="h-6 w-125 bg-gray-300 rounded mb-4"></div>
        <div className="h-9 w-75 bg-gray-300 rounded mb-2"></div>
      </div>
      <div className="w-[76%] flex flex-wrap mx-auto mt-10 gap-5 justify-center">
        {Array(count)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="max-w-70 mb-2 ">
              <div className="w-68 h-45 rounded-2xl bg-gray-200"></div>
              <div className="w-[95%] mx-auto mt-4">
                <div>
                  <div className="w-full h-6 mt-3 bg-gray-200 rounded-sm"></div>
                  <div className="w-full h-6 mt-3 bg-gray-200 rounded-sm"></div>
                  <div className="w-full h-6 mt-3 bg-gray-200 rounded-sm"></div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
