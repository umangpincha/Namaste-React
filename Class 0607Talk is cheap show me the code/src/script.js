import React from "react";
import ReactDOM  from "react-dom/client";
import NavBar from "./components/NavBar"
import Body from "./components/Body"
import Footer from "./components/Footer"




const AppLayout = ()=>{
    return(
        <>
        <NavBar/>
        <Body/>
        <Footer/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);