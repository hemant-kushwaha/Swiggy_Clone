import InstaHeader from "./InstaHeader";
import InstaFooter from "./InstaFooter"
import CardImage from "./CardImage";
import CardWithCart from "./CardWithCart"
import { Card0,Card2, Card1,Card3,Card5,Card6,Card7,Card8,Card9,Card10,Card11,Card12,Card13} from "../../Utils/InstamartData";

export default function Instamart (){
    return(
        <>
        <InstaHeader></InstaHeader>
        <div className="w-[65%] mx-auto mb-20">
            <img className="mb-10" src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/MERCHANDISING_BANNERS/IMAGES/MERCH/2026/1/20/041a3871-399e-47fb-8f4c-f62f41bd66b9_33LowestpricesacrossLucknow.png" alt="" />
            <CardImage card={Card0} title={"Lowest Prices"}></CardImage>
            <CardWithCart card={Card1} title={"Hot Deals"}></CardWithCart>
            <CardImage card={Card2}  title={"Fresh items"}></CardImage>
            <CardImage card={Card9}  title={"Grocery & Kitchen"}></CardImage>
            <CardImage card={Card10}  title={"Snacks & drinks"}></CardImage>
            <CardImage card={Card11}  title={"Beauty & Wellness"}></CardImage>
            <CardImage card={Card12}  title={"Household & Lifestyle"}></CardImage>
            <CardImage card={Card13}  title={"Shop by Store"}></CardImage>
            <CardWithCart card={Card3} title={"Trending near you"} subtitle={"Upto 50% OFF"}></CardWithCart>
            <CardWithCart card={Card5} title={"Exclusive Deals For You"}></CardWithCart>
            <CardWithCart card={Card6} title={"Brooms, Wipers, and More"} subtitle={"Keep your home clean."}></CardWithCart>
            <CardWithCart card={Card8} title={"Kitchen Essentials Tools"} subtitle={"Spoons, Forks, Knives and More."}></CardWithCart>
            <CardWithCart card={Card7} title={"Atta, rice and other flours"}></CardWithCart>


        </div>
        <InstaFooter></InstaFooter>
        </>
    )
}