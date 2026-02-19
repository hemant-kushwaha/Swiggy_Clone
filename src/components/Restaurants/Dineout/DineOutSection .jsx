import OffersCard from "./OffersCard";
import AddOffersCard from './AddOffersCard';
import {food} from "../../../Utils/DineoutData"
import MenuSection from "./MenuSection";

export default function DineOutSection ({restaurantData}){
    return(
         <div className="w-[68%]">
                            <div>
                            <h1 className="text-2xl font-bold mb-5">Offers</h1>
                            <div className=" flex flex-nowrap flex-shrink-0  gap-5 mx-auto overflow-x-auto scrollbar-hide">
                            <OffersCard title={restaurantData?.info?.vendorOffer?.info?.description || "Flat 20% off"}  perGuest={"@₹15/guest"}> </OffersCard>
                            <OffersCard title={restaurantData?.info?.offerInfoV3?.vendorOffer?.title|| "Flat 30% off"} perGuest={"@₹10/guest"}> </OffersCard>
                            <OffersCard title={restaurantData?.info?.vendorOffer?.info?.description ||" Flat 20% off"}  perGuest={"@₹15/guest"}> </OffersCard>
                            <OffersCard title={restaurantData?.info?.vendorOffer?.info?.description || "Flat 20% off"}  perGuest={"@₹15/guest"}> </OffersCard>
                            <OffersCard title={restaurantData?.info?.vendorOffer?.info?.description || "Flat 20% off"}  perGuest={"@₹15/guest"}> </OffersCard>
                            </div>
                            </div>
                           
                          <div>
                          <div className="text-lg font-bold mb-5 mt-10">Additional Offers</div>
                          <div className="flex flex-nowrap overflow-x-auto gap-5 scrollbar-hide mb-5">
                            <AddOffersCard src={"https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MARKETING_BANNERS/IMAGES/OFFERS/2025/6/1/7252394d-3011-4adb-a188-9a65af839ed9_"} offers={"Flat 10% Cashback"} coupon={"Flat 10% Cashback | Above ₹100"}></AddOffersCard>
                            <AddOffersCard src={"https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"} offers={"10% off upto ₹500"} coupon={"Use HDFCINFINIA | Above ₹3500"}></AddOffersCard>
                            <AddOffersCard src={"https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"} offers={"10% off upto ₹400"} coupon={"Use HDFCDINERS | Above ₹3000"}></AddOffersCard>
                            <AddOffersCard src={"https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MARKETING_BANNERS/IMAGES/OFFERS/2026/1/29/95143c51-e6da-45cf-851d-fa6e18a16ce6_"} offers={"Flat ₹50 cashback"} coupon={"Use MBKDINEUPI | Above ₹1000"}></AddOffersCard>
                            <AddOffersCard src={"https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MARKETING_BANNERS/IMAGES/OFFERS/2026/1/29/95143c51-e6da-45cf-851d-fa6e18a16ce6_"} offers={"Flat ₹50 cashback"} coupon={"Use MBKDINE | Above ₹1500"}></AddOffersCard>
                          </div>
                          <hr  className="text-gray-300 mt-4"/>
                          </div>

                          <div>
                            <MenuSection></MenuSection>
                          </div>
                         <div>
                            <div className="text-lg font-bold mt-10 text-[rgba(2,6,12,0.92)]">Cuisines</div>
                            <div className="text-lg font-[600] mb-3">{restaurantData?.info?.cuisines?.join(", ")}</div>
                            <hr  className="text-gray-300 mt-8 mb-8"/>
                            <div>
                                <h1 className="text-2xl font-bold mb-4">Location</h1>
                                <div className="flex">
                                <div className="mt-1 mr-2"><svg width="24" height="24"><path fillRule="evenodd" clipRule="evenodd" d="M10 1.75c-3.472 0-6.25 2.729-6.25 6.05 0 2.506 1.55 4.49 3.232 5.9A15.68 15.68 0 0 0 10 15.67a15.677 15.677 0 0 0 3.018-1.97c1.683-1.41 3.232-3.394 3.232-5.9 0-3.321-2.778-6.05-6.25-6.05Zm.75 17.428v-2.205a17.18 17.18 0 0 0 3.232-2.123c1.817-1.523 3.768-3.889 3.768-7.05 0-4.19-3.49-7.55-7.75-7.55S2.25 3.61 2.25 7.8c0 3.161 1.95 5.527 3.768 7.05a17.177 17.177 0 0 0 3.232 2.123v2.205a.75.75 0 0 0 1.5 0Zm0-11.428V3.5h-1.5v5.75H14v-1.5h-3.25Z" fill="#02060C" fillOpacity="0.6"></path></svg></div>
                                <div>
                                    <div className="text-lg font-semibold text-[#02060cbf]">{restaurantData?.info?.locationInfo?.formattedAddress}   <br /> {restaurantData?.info?.locationInfo?.distanceString + " away"}</div>
                                    <div className="text-[#ff5200] font-bold text-lg mt-1 mb-8">View on Maps</div>
                                </div>
                            </div>
                            </div>

                            <div>
                                <h1 className="text-2xl font-bold mb-2">Timings</h1>
                                <div className="flex items-start gap-2">
                                <div className="mt-1 mr-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><g clipPath="url(#clip0_2755_2844)"><path fillRule="evenodd" clipRule="evenodd" d="M9.99961 1.89998C5.5261 1.89998 1.89961 5.52647 1.89961 9.99998C1.89961 14.4735 5.5261 18.1 9.99961 18.1C14.4731 18.1 18.0996 14.4735 18.0996 9.99998C18.0996 5.52647 14.4731 1.89998 9.99961 1.89998ZM0.0996094 9.99998C0.0996094 4.53236 4.53199 0.0999756 9.99961 0.0999756C15.4672 0.0999756 19.8996 4.53236 19.8996 9.99998C19.8996 15.4676 15.4672 19.9 9.99961 19.9C4.53199 19.9 0.0996094 15.4676 0.0996094 9.99998Z" fill="#02060C" fillOpacity="0.6"></path><path fillRule="evenodd" clipRule="evenodd" d="M9.52893 4.58923C10.026 4.58923 10.4289 4.99218 10.4289 5.48923V10.4892C10.4289 10.5251 10.4289 10.5582 10.429 10.5892C10.4599 10.5892 10.4931 10.5892 10.5289 10.5892H14.5289C15.026 10.5892 15.4289 10.9922 15.4289 11.4892C15.4289 11.9863 15.026 12.3892 14.5289 12.3892H10.5289C10.5165 12.3892 10.504 12.3892 10.4913 12.3892C10.2895 12.3894 10.058 12.3895 9.86037 12.3629C9.62442 12.3312 9.3073 12.2475 9.03898 11.9792C8.77067 11.7109 8.68699 11.3937 8.65526 11.1578C8.62869 10.9601 8.62881 10.7287 8.62892 10.5269C8.62893 10.5142 8.62893 10.5016 8.62893 10.4892V5.48923C8.62893 4.99218 9.03188 4.58923 9.52893 4.58923Z" fill="#02060C" fillOpacity="0.6"></path></g><defs><clipPath id="clip0_2755_2844"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg></div>
                                <div>
                                    <div className="text-lg font-semibold text-[#02060cbf]">{"OPEN TILL 11PM"}</div>
                                    <div className="text-[#ff5200] font-bold text-lg mt-1">See all timings</div>
                                </div>
                            </div>
                            </div>
                            <hr  className="text-gray-300 mt-10 mb-10"/>
                            <div>
                                <h1 className="text-2xl font-bold mb-3">Facilities</h1>
                                    <div className="flex gap-30 font-[600] text-[#02060cbf] text-lg ml-1">
                                      <ul className="list-disc pl-5 space-y-0.5">
                                        <li>Reservation available</li>
                                        <li>Free wifi</li>
                                        <li>Pure veg</li>
                                      </ul>

                                      <ul className="list-disc pl-5 space-y-0.5">
                                        <li>Parking available</li>
                                        <li>SwiggyPay accepted</li>
                                      </ul>
                                    </div>


                            </div>

                           



                         </div>
                        
                        </div>
    )
}