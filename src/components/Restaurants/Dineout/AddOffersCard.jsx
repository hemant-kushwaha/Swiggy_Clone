export default function AddOffersCard({ src, offers, coupon }) {
  return (
    <>
      <div>
        <div className="flex flex-nowrap border-2 gap-2 flex-shrink-0 rounded-3xl border-gray-300 min-w-[340px] ml-5 p-3 mb-3">
          <img height="50px" width="50px" src={src}></img>
          <div>
            <div className="text-xl font-bold mb-[2px]">{offers}</div>
            <div className="text-xs font-bold text-gray-500">{coupon}</div>
          </div>
        </div>
      </div>
    </>
  );
}
