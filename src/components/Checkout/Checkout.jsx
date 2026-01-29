import { useSelector } from "react-redux"

export default function Checkout (){
   const items = useSelector(state=>state.cartSlice.items)
   console.log(items);
    return(
        <>
        {
            items.map((value)=><div key={value.id}>{value.name}</div>)
            
        }
        
        </>
    )
}