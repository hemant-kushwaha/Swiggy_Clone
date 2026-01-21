export default function Shimmer ({count}) {
    return(
        <>
        <div className="w-[80%] flex flex-wrap mx-auto mt-20 gap-5 animate-pulse">
            {Array(count).fill(0).map((_,index)=>(
            <div key={index} className="max-w-70 mb-2 ">
                <div className="w-70 h-45 rounded-2xl bg-gray-100"></div>
                <div className="w-[95%] mx-auto mt-4">
                <div>
                    <div className="w-full h-6 mt-3 bg-gray-100 rounded-sm"></div>
                    <div className="w-full h-6 mt-3 bg-gray-100 rounded-sm"></div>
                    <div className="w-full h-6 mt-3 bg-gray-100 rounded-sm"></div>                    
                </div>
                </div>
            </div>))}
        </div>
        </>
    )
}
