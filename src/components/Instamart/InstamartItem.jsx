import InstaFooter from "./InstaFooter";
import { Link } from "react-router";
import { allCardsClick } from "../../Utils/InstamartData";
import { useParams } from "react-router";
import { useState } from "react";

export default function InstamartItem() {
  let { id } = useParams();
  const item = allCardsClick.flat().find((item) => item?.productId == id);
  console.log(item);
  const [showPhotos, setShowPhotos] = useState(false);

  return (
    <>
      <div>
        {!showPhotos ? (
         <div>
             <div className="w-[65%] mx-auto bg-[#F0F0F5] pb-8">
             <nav className=" flex gap-4 mx-auto sticky top-0 z-10 p-5 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] text-[#02060cbf] font-bold text-md rounded-b-2xl bg-white">
                <Link to={"/instamart"}>
                <div>く</div>
                </Link>
                <div>{item?.displayName}</div>
             </nav>

            <div className="bg-white m-2 rounded-3xl ">
             
              <div className="p-10 flex flex-col items-center">
                <img
                  className="w-140 h-134 border-1 object-cover border-gray-200 shadow-xs p-5"
                  onClick={() => setShowPhotos(true)}
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/" +
                    item?.variations?.[0]?.imageIds?.[0]
                  }
                  alt=""
                />
              </div>
              <hr className="text-gray-300 w-[94%] mx-auto" />

              <div className="flex flex-col gap-1 pt-5 px-5 pb-10">
                <div className="text-xs text-[#02060c73] font-bold">9 MINS</div>
              <div className="text-md text-[#02060cbf] font-bold ">{item?.displayName}</div>
              <div className="text-sm text-[#02060c99] font-semibold mt-1 ">
                {item?.variations?.[0]?.quantityDescription}
              </div>
              <div className="flex gap-2">
                <div className="text-sm text-[#02060cbf] font-bold">
                  {"₹"+item?.variations?.[0]?.price?.mrp?.units || " "}
                </div>
                <div className="text-sm line-through text-[#02060c99] font-semibold">
                  {item?.variations?.[0]?.price?.offerPrice?.units || " "}
                </div>
              </div>
              </div>
            </div>
            <div className=" mb-5 bg-white mx-2 my-4 p-5 rounded-xl">
              <div className="text-md text-[#02060cbf] font-bold mb-3">Highlights</div>
              
              <div className="border-1 text-xs border-gray-300 rounded-lg overflow-hidden">             
              <table className="w-full rounded-lg">
                 <tbody>
    <tr>
      <td className="border bg-gray-100  border-gray-300 p-3 text-[#02060c99] font-bold">Box Contents</td>
      <td className="border text-[#02060cbf] font-semibold border-gray-300 p-3">{item?.displayName}</td>
    </tr>

    <tr>
      <td className="border bg-gray-100  border-gray-300 p-3  text-[#02060c99] font-bold">Pack Size</td>
      <td className="border text-[#02060cbf] font-semibold border-gray-300 p-3">
        {item?.variations?.[0]?.quantityDescription}
      </td>
    </tr>

    <tr>
      <td className="border bg-gray-100 border-gray-300 p-3 text-[#02060c99] font-bold">Brand</td>
      <td className="border text-[#02060cbf] font-semibold border-gray-300 p-3">{item?.brand}</td>
    </tr>

    <tr>
      <td className="border bg-gray-100  border-gray-300 p-3  text-[#02060c99] font-bold">Dimensions</td>
      <td className="border text-[#02060cbf] font-semibold  border-gray-300 p-3">
        {item?.variations?.[0]?.dimensions?.lengthInCm} x{" "}
        {item?.variations?.[0]?.dimensions?.widthInCm} x{" "}
        {item?.variations?.[0]?.dimensions?.heightInCm}
      </td>
    </tr>
                 </tbody>
              </table>
               </div>
            </div>
            <div className=" mb-5 bg-white mx-2 my-4 p-4 rounded-xl flex justify-between">
              <Link
                to={"/instamart"}
                className="flex justify-between items-center gap-4"
              >
                <div>
                  <img
                    className="h-8 w-8"
                    src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/InstamartAssets/Bleed%20Blue/PDP%20Brand.png"
                    alt=""
                  />
                </div>
                <div className="text-sm text-[#02060ceb] font-semibold">{`Explore more items`}</div>
                <div className="text-xl font-bold text-[#3483eb]">{`>`}</div>
              </Link>
            </div>
            <div className="mb-5 mx-2 my-4 flex flex-col gap-4 rounded-xl p-3 bg-white">
              <div className="text-md text-[#02060cbf] font-bold">Seller Details</div>
              <div className="text-[#02060cbf] font-semibold text-sm">
                <p>
                  Seller Name: PYD Retail Pvt Ltd - BBD University FSSAI Number:
                  2025011710606142242 Address: Gf,Khata No. 109, Faizabad Road,
                  Near Babu Banarasi Das University, Village Semara, Nagar Nigam
                  Food Lucknow, Uttar Pradesh, 226001Customer Care:
                  instamart.support@swiggy.in
                </p>
              </div>
            </div>
            <div className="mx-2 flex flex-col gap-2 rounded-xl p-3 bg-white">
              <div className="text-md text-[#02060cbf] font-bold">Other Information</div>
              <div className="text-[#02060cbf] font-semibold text-sm">
                <p>
                  Country Of Origin: India. The Shelf life of this product is
                  270 days from the date of manufacture or packed by.The
                  image(s) shown are representative of the actual product. While
                  every effort has been made to maintain accurate and up to date
                  product related content, it is recommended to read product
                  labels, batch and manufacturing/packing details along with
                  warnings and directions before using or consuming a packed
                  product. For other products or any additional information,
                  please contact the seller and in case you wish to contact the
                  manufacturer/packer, the address mentioned on the product
                  label should be used.
                </p>
              </div>
            </div>
                       

          </div>
           <InstaFooter></InstaFooter>
          
            </div>
        ) : (
          <div className="fixed inset-0 bg-white z-50 p-6 overflow-auto w-[65%] mx-auto">
            <button
              className="px-4 py-2 rounded-xl text-2xl"
              onClick={() => setShowPhotos(false)}
            >
              {" "}
              ×{" "}
            </button>
            <div className="flex overflow-x-auto  w-120 mx-auto border-gray-200">
              {item?.variations?.[0]?.medias?.map((item, index) => {
                return (
              
                    <div key={item?.id + index} className="flex-shrink-0">
                      <div>
                        <img
                          className="w-120 h-134 object-cover"
                          src={
                            "https://media-assets.swiggy.com/swiggy/image/upload/" +
                            item?.id
                          }
                          alt=""
                        />
                      </div>
                    </div>
                
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
