export default function MenuFooter ({name,outlet,address}) {
    return(
        <>
        <div className="bg-[#f1f1f6] p-5">
            <div className="flex gap-3 items-center mb-4">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_60/fssai_final_edss9i" height={"25px"} width={"50px"}  />
                <div className="text-xs text-gray-500 font-semibold">License No. 12715066000712</div>
            </div>
            <hr className="text-gray-400 mb-4" /> 
            <div>
                <div className="font-bold text-sm text-gray-500 ">{name}</div>
                <div  className="text-gray-500 font-[500] text-sm mb-3">{`(Outlet: ${outlet})`}</div>
                <div className="text-gray-500 font-[500] text-xs mb-6"><span className="text-lg mr-1">⚲</span>{address}</div>

                <hr  className="mx-auto bg-[#02070f99] text-gray-400 mb-4"/>

                <div className="container text-center mx-auto pb-35">
                  <div className="text-sm text-black font-semibold mb-3 ">For better experience, download the Swiggy app now</div>
                  <div className="flex gap-6 justify-center h-12">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"></img>
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"></img>                
                  </div>
                </div>
            </div>
        </div>
        </>
    )
}