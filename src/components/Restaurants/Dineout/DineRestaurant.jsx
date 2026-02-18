import { useState, useEffect} from "react"
import {dineoutRestaurants} from "../../../Utils/DineoutData"
import DineHeader from "./DineHeader"
import { useParams} from "react-router";
import OffersCard from "./OffersCard";



export default function DineRestaurant() {

    let {id} = useParams();
    const [dineOut, setdineOut] = useState(true);
    const [photos, setPhotos] = useState(false);
    const [menu, setMenu] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(()=>{
        const checktime =()=>{
            const now = new Date ();
            const hours = now.getHours();
            // Closed between 12AM & 10AM
            if(hours>=0 && hours<10){
                setIsOpen(false)
            }
            else{
                setIsOpen(true)
            }
        };
        checktime();
        const timer = setInterval(checktime,60000)
        return clearInterval();
    },[])


    const restaurantData = dineoutRestaurants.find( (item) => item?.info?.id === id);

    return(
        <>
        <DineHeader></DineHeader>
        <div className=" w-[80%] mx-auto mt-10 mb-10">
            <div className="text-3xl text-[rgba(2,6,12,0.75)] font-bold mb-6">{restaurantData?.info?.name}</div>
            <div className="flex gap-8 text-lg text-[rgba(0, 0, 0, 0.75)] font-semibold mb-2 p-2">
                <button>Dineout</button>
                <button>Photos</button>
                <button>Menu</button>
            </div>
            <hr className="text-gray-300 p-2 mb-6"/>
          {/* Image Div */}
            <div className="relative">
                <img  className="w-full h-70 object-cover rounded-xl"src={`https://media-assets.swiggy.com/swiggy/image/upload/`+restaurantData?.info?.mediaFiles[0]?.url}  alt="restaurant photo" />
                <div className="flex mb-5">
                   <div className="absolute top-8 left-8 bg-white p-5 rounded-3xl ">
                   <div className="flex gap-1 font-bold mb-2"> <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12.0002" cy="12" r="10.8" fill="#1BA672"></circle><path d="M12.0977 15.438C12.0373 15.4024 11.9623 15.4024 11.9019 15.438L8.77957 17.2761C8.32159 17.5457 7.76507 17.1308 7.89275 16.6149L8.73063 13.2294C8.74846 13.1573 8.72339 13.0814 8.66614 13.0341L5.94605 10.7883C5.5298 10.4447 5.74364 9.76902 6.28183 9.72744L9.88118 9.44931C9.95264 9.44379 10.0152 9.39914 10.0435 9.33333L11.4489 6.07662C11.6574 5.59359 12.3423 5.59359 12.5507 6.07662L13.9561 9.33333C13.9845 9.39914 14.047 9.44379 14.1184 9.44931L17.7178 9.72744C18.256 9.76902 18.4698 10.4447 18.0536 10.7883L15.3335 13.0341C15.2762 13.0814 15.2512 13.1573 15.269 13.2294L16.1069 16.6149C16.2345 17.1308 15.678 17.5457 15.22 17.2761L12.0977 15.438Z" fill="white"></path></svg></span>
                   {restaurantData?.info?.rating?.value} • {restaurantData?.info?.rating?.countDescription} • {restaurantData?.info?.costForTwo}
                   </div>
                   <div className="text-sm font-bold mb-3">{restaurantData?.info?.cuisines.join(", ")}</div>
                   <div>
                    <span className="text-lg font-semibold text-gray-600">Location </span>
                    <span className="text-lg font-[400]">{restaurantData?.info?.locationInfo?.formattedAddress}</span>
                   </div>
                   <div className="mb-3 text-lg font-bold text-[rgb(27,166,114)]"> 
                    <span>{isOpen ? "Open now" : "Closed now"}</span>
                    </div>
                    <hr className="w-120 h-2 text-gray-300 mt-2 mb-3" />
                   <div className="flex gap-6 text-[#FF5200] font-bold px-10 text-lg justify-center">
                    <div className="flex gap-2 items-center"> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="18" stroke="#FF5200" strokeWidth="2" fill="none"></rect><line x1="3" y1="10" x2="21" y2="10" stroke="#FF5200" strokeWidth="2"></line><line x1="7" y1="2" x2="7" y2="6" stroke="#FF5200" strokeWidth="2"></line><line x1="17" y1="2" x2="17" y2="6" stroke="#FF5200" strokeWidth="2"></line><line x1="7" y1="14" x2="11" y2="14" stroke="#FF5200" strokeWidth="2"></line><line x1="13" y1="14" x2="17" y2="14" stroke="#FF5200" strokeWidth="2"></line><line x1="7" y1="18" x2="11" y2="18" stroke="#FF5200" strokeWidth="2"></line><line x1="13" y1="18" x2="17" y2="18" stroke="#FF5200" strokeWidth="2"></line></svg> 
                    <div className="border-r-2 border-gray-300 pr-6"> Book Table  </div>
                   </div>
                    <div className="flex gap-2 items-center">
                        <img className="sc-hLQRIN fuAbCG" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/seo%20web/callOrange.png" width="24" height="24" alt="Expand"></img>
                        <div className="border-r-2 border-gray-300 pr-6">Call</div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><g clipPath="url(#clip0_2121_11726)"><path d="M13.4114 3.28669C14.7155 2.61622 15.6468 2.13871 16.3304 1.89549C17.0525 1.63858 17.2523 1.73449 17.3308 1.80942C17.4094 1.88434 17.5147 2.07938 17.2924 2.81285C17.0819 3.50721 16.6492 4.4601 16.0414 5.79464L12.5768 13.4024C11.9452 14.7892 11.4923 15.7812 11.0928 16.4209C10.6684 17.1007 10.4463 17.1476 10.3407 17.1362C10.2804 17.1298 10.2091 17.1044 10.1112 16.9849C10.0023 16.852 9.88361 16.6283 9.75609 16.2724C9.50034 15.5586 9.2666 14.4874 8.94155 12.9908L8.93639 12.967C8.86237 12.6261 8.79887 12.3337 8.72121 12.0971C8.63817 11.8442 8.52672 11.6141 8.33356 11.4157C8.14062 11.2175 7.91412 11.1001 7.66401 11.0104C7.43033 10.9266 7.14076 10.8556 6.80351 10.7729L6.77988 10.7671L6.41692 10.6781C5.07911 10.3501 4.12891 10.1158 3.49545 9.86513C2.83288 9.60289 2.74372 9.40905 2.73063 9.29786C2.71754 9.18667 2.75924 8.97742 3.34279 8.56848C3.9007 8.1775 4.77052 7.729 5.99556 7.09921L13.4114 3.28669Z" stroke="#FF5200"></path></g><defs><clipPath id="clip0_2121_11726"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>
                        <div>Direction</div>
                    </div>
                   </div>
                  </div>
                    <button className="px-5 py-3 absolute top-50 right-8 rounded-xl text-[13px] text-[rgba(0, 0, 0, 0.75)] font-bold bg-gray-100"> ↕ Show all images</button>
                </div>
                

            </div>

        {/* Offers card */}
        <hr  className="mb-8"/>
                
                <div className="flex justify-between gap-3">
                    
                        <div className="w-[68%]">
                            <h1 className="text-2xl font-bold mb-5">Offers</h1>
                            <div className=" flex flex-nowrap flex-shrink-0  gap-5 mx-auto overflow-x-auto scrollbar-hide">
                            <OffersCard title={restaurantData?.info?.vendorOffer?.info?.description}  perGuest={"@₹15/guest"}> </OffersCard>
                            <OffersCard title={restaurantData?.info?.offerInfoV3?.vendorOffer?.title}  perGuest={"@₹10/guest"}> </OffersCard>
                            <OffersCard title={restaurantData?.info?.vendorOffer?.info?.description}  perGuest={"@₹15/guest"}> </OffersCard>
                            <OffersCard title={restaurantData?.info?.vendorOffer?.info?.description}  perGuest={"@₹15/guest"}> </OffersCard>
                            <OffersCard title={restaurantData?.info?.vendorOffer?.info?.description}  perGuest={"@₹15/guest"}> </OffersCard>
                            </div>
                        <div>
                        </div>
                        <div className="text-xl font-bold mb-5 mt-10">Additional Offers</div>
                        <div className="flex flex-nowrap border-2 gap-2 flex-shrink-0 rounded-3xl border-gray-300 min-w-[340px] ml-5 p-3 mb-3">
                                            {/* <img height="50px" width="50px" src={`https://media-assets.swiggy.com/swiggy/image/upload/${value?.info?.offerLogo}`}></img> */}
                                            <div>
                                                {/* <div className="text-md font-bold">{value?.info?.header}</div> */}
                                                {/* <div className="text-md font-bold text-gray-500">{"primaryDescription" in value?.info ? value?.info?.primaryDescription : value?.info?.description}</div> */}
                                            </div>

                                        </div>
                        </div>
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/c/newqrcodeswiggyLatest.png" alt="logo" />
                </div>

        </div>

        </>
    )
}