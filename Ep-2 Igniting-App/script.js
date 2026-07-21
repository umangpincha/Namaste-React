import React from "react";
import ReactDOM from "react-dom/client";

let root = document.querySelector("#root")
// let h1 = React.createElement("h1" , {id:"heading"} , "Hello JS")


//TODO: Below code is very difficult to read so JSX came into picture
let div = React.createElement("div" , {id:"parent"} , [

    React.createElement("div" , {id:"child"} , [
        React.createElement("h1" , {} , "Hello I am namaste"),
        React.createElement("h2" , {} , "Hello I am h2")
    ]) ,

    React.createElement("div" , {id:"child2"} , [
        React.createElement("h1" , {} , "Hello I am h1"),
        React.createElement("h2" , {} , "Hello I am h2")
    ]) 
]     
)
let myRender = ReactDOM.createRoot(root);
myRender.render(div)

