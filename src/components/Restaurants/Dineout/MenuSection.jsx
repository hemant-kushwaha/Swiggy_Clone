import { food } from "../../../Utils/DineoutData";

export default function MenuSection({ restaurantData }) {
  return (
    <>
      <div className="w-[70%]">
        <div className="text-2xl font-bold mb-5 mt-5">Food</div>
        <div className=" flex flex-nowrap gap-5 mx-auto overflow-x-auto scrollbar-hide mb-12">
          {food.map((item, index) => {
            return (
              <div key={index + item?.description} className="flex-shrink-0">
                <img
                  className="w-70 h-70 object-cover"
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/" +
                    item?.url
                  }
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
