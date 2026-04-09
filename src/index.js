import React from "react";
import ReactDom from "react-dom/client"

const Hello = ()=>{
    return <h1>Hello world</h1>
}


const root = ReactDom.createRoot(document.getElementById("root"))

root.render(<Hello></Hello>)