import ItemCard from "./ItemCard"
import { useState } from "react";
export default function MenuCard ({menuItems}){

  const [isOpen,setIsOpen] = useState(true);

  if('categories' in menuItems){
        return(
          <>
          <div className="w-full">
            <p>{menuItems.title}</p>
            <div>
              {
                menuItems?.categories.map((items)=><MenuCard key={items?.title} menuItems={items}></MenuCard>)
              }
            </div>
          </div>
          </>
        )
  }

 if(!isOpen){
    return(
      <>
       <div className="w-full">
          <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
            <button className="text-3xl mr-10" onClick={()=>setIsOpen(!isOpen)}> {isOpen? "˅": "˄"} </button>
          </div>
        <div className="h-5 bg-gray-200 mt-2 mb-2 p-2"></div>

        </div>
      </>
    )
   }

  const validItems = menuItems?.itemCards?.filter(
  (item) => item?.card?.info?.imageId
);

    return(
        <>
        <div className="w-full">
           <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
            <button className="text-3xl mr-10" onClick={()=>setIsOpen(!isOpen)}> {isOpen? "˅": "˄"} </button>
          </div>
          <div>
            {
                validItems?.map((items)=><ItemCard key={items?.card?.info?.id} itemData={items?.card?.info}></ItemCard>)
            }
          </div>
        </div>
        </>
    )
}