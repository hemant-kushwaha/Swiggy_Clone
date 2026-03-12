export default function ScreenGuard({ children }) {
  return (
    <>
      <div className="xl:hidden flex items-center justify-center h-screen">

        <div className="relative w-full h-full">

          <img
            src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_720,w_720/InstamartAssets/ErrorStates/IM_error_api_failure"
            alt="desktop recommended"
            className="mx-auto h-full max-w-[90%] object-cover"
          />

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[75%] sm:w-[65%] md:w-[55%] bg-[#F9D5E8] text-black px-4 py-4 rounded-lg text-center">

            <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 bg-[#9E1E62] text-white p-4 rounded-lg">
              Desktop Experience Recommended
            </h1>

            <p className="text-sm sm:text-base mb-1">
              Currently optimized for desktop screens to demonstrate the UI and features.
            </p>

            <p className="text-sm sm:text-base">
              Mobile responsiveness and additional features will be available soon.
            </p>

          </div>

        </div>

      </div>

      <div className="hidden xl:block">{children}</div>
    </>
  );
}