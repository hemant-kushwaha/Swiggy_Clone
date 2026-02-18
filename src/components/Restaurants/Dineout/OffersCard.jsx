export default function OffersCard ({title,perGuest}) {
    return(
        <div className="flex flex-col border-gray-300 shadow-md shadow-gray z-5 border-1 rounded-xl w-70 overflow-hidden flex-shrink-0">
        <div className="p-6">
            <div className="text-xl font-bold mb-1">{title}</div>
            <div className="text-xs text-gray-600 font-semibold mb-1">on total bill</div>
            <div className="text-xs text-gray-1000 font-bold mb-2">{perGuest}</div>
        </div>

        <div className=" relative border-t border-dashed border-[rgba(2,6,12,0.15)] px-6 py-3 w-full bg-[linear-gradient(285deg,_rgba(241,91,107,0.1)_-18.01%,_rgba(241,91,106,0.1)_28.51%,_rgba(241,92,66,0.1)_64.46%,_rgba(248,154,75,0.1)_97.07%)]">
            <div className="flex gap-1">
                <div className="text-xs font-bold mb-2">Pre-book offer</div>
                <img src="https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/one_exclusive_strip.png" alt="logo" className="w-22 h-4" />
            </div>
            <div className="text-xs fonr-[600] mb-2">Limited slots, buy offer <br></br> and book your table</div>
            <img  className="absolute z-1 -bottom-2 -right-2 w-16 h-16" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/whiteone_logo2.png" alt="" />
        </div>
        </div>
    )
}