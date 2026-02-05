import { useState } from "react";
export default function Signup ({close}){

      const [isFocused, setIsFocused] = useState(false);

    return(
        <>
        {/* Left Half  */}
        <div onClick={close} className="fixed top-0 left-0 w-[60%] h-screen bg-black/50 z-40" />
        {/* Right half */}
        <div className="fixed top-0 right-0 w-[40%] h-screen bg-white z-50 p-10">
        <button onClick={close} className="text-xl mb-6">✕</button>
        <div className="w-[70%]">
           <div className="flex justify-between gap-2 mb-10">
            <div>
                <h1 className="text-3xl font-bold mb-3">Login</h1>
                <div>
                <span className="font-semibold text-sm">or</span>
                <span className="font-semibold text-[#FF5200] text-sm"> create an account</span>
                </div>
                <div className="font-semibold">───</div>
           </div>
            <div><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" alt="" height={"100"} width={"100"}/></div>
            
         </div>
           <div className="">
                <div className="border-1 border-gray-300 mb-6 p-2">
               {isFocused && (<div className="relative top--2 left-2 text-xs  transition-all duration-1000 ease-out translate-y-0"> Phone Number</div> )}     
                    <input type="text" placeholder={isFocused ? "" : "Phone Number"}  className="text-lg w-full text-gray-500 p-2 font-semibold focus:outline-none" onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
                </div>
                <div className="text-center text-lg bg-[#FF5200] text-white mb-1">Login</div>
                <div className="text-sm font-semibold">By clicking on Login, I accept the Terms & Conditions & Privacy Policy</div>
            </div>
        </div>
        </div>
        </>
        )
}