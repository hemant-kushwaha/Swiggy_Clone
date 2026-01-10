import React from "react";
import ReactDOM from "react-dom/client"
import HomePage from "./src/pages/HomePage";

function App () {
    return(
        <>
        <HomePage></HomePage>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)