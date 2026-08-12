import {groceryGridCards} from "../../Utils/GroceryData"
import GroceryCard from "./GroceryCard"

export default function GroceryOption () {

     return(
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-20">
                <h1 className="text-xl font-semibold">Shop groceries on Instamart</h1>
                <div className="container mx-auto flex flex-nowrap overflow-x-auto mt-5 gap-5 ">
                   {groceryGridCards.map((groceryData)=> <GroceryCard key={groceryData.id} groceryData={groceryData} > </GroceryCard>)}
                </div>
            </div>
        )
}
