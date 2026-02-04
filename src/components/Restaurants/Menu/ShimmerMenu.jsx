export default function ShimmerMenu () {
    return(
             
        <div className="w-[60%] mx-auto mt-10 animate-pulse">
      
             <div className="h-4 w-48 bg-gray-300 rounded mb-6"></div>
             <div className="h-8 w-72 bg-gray-300 rounded mb-8"></div>

            <div className="border rounded-xl p-4 mb-10">
                <div className="h-4 w-32 bg-gray-300 rounded mb-3"></div>
                <div className="h-4 w-52 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 w-40 bg-gray-300 rounded"></div>
            </div>

            <div className="flex gap-4 overflow-hidden mb-12">
                {Array(3).fill("").map((_, i) => (
                <div key={i} className="min-w-[300px] h-24 bg-gray-300 rounded-2xl"></div>
                ))}
            </div>

            {
            Array(6).fill("").map((_, i) => (
                <div key={i} className="mb-8">
                     <div className="h-6 w-48 bg-gray-300 rounded mb-4"></div>
                     {
                         Array(3).fill("").map((_, j) => (
                               <div key={j} className="h-20 bg-gray-200 rounded-xl mb-4" ></div>
                             ))               
                     }
                </div>

             ))}
    </div>        
    )
}