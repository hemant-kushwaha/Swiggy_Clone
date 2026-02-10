export default function Shimmer ({count}) {
    return(
        <>
        <div className="w-[80%] mx-auto mt-5">
              <div className=" h-10 w-80 bg-gray-300 rounded-lg mb-5"></div>
              <div className="flex mx-auto h-50 gap-5 bg-gray-200 rounded-lg">            
                 
              </div>   
            <hr  className="mt-8 text-2xl text-gray-300 mb-8"/>
              <div className=" h-10 w-110 bg-gray-300 rounded-lg"></div>   
        </div>
        
        <div className="w-[80%] flex flex-wrap mx-auto mt-8 gap-5 animate-pulse">
            {Array(count).fill(0).map((_,index)=>(
            <div key={index} className="max-w-70 mb-2 ">
                <div className="w-70 h-45 rounded-2xl bg-gray-200"></div>
                <div className="w-[95%] mx-auto mt-4">
                <div>
                    <div className="w-full h-6 mt-3 bg-gray-200 rounded-sm"></div>
                    <div className="w-full h-6 mt-3 bg-gray-200 rounded-sm"></div>
                    <div className="w-full h-6 mt-3 bg-gray-200 rounded-sm"></div>                    
                </div>
                </div>
            </div>))}
        </div>
        </>
    )
}
