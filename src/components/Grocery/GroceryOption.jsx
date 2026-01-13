import {groceryGridCards} from "../../Utils/GroceryData"
import GroceryCard from "./GroceryCard"

export default function GroceryOption () {

     return(
            <div className="max-w-[80%] container mx-auto mt-20">
                <h1 className="text-xl font-semibold">Shop groceries on Instamart</h1>
                <div className="container mx-auto flex flex-nowrap overflow-x-auto mt-5 gap-5 ">
                   {groceryGridCards.map((groceryData)=> <GroceryCard key={groceryData.id} groceryData={groceryData} > </GroceryCard>)}
                </div>
            </div>
        )
}