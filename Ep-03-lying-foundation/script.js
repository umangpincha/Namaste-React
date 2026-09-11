import React from "react"
import ReactDOM from "react-dom/client"
// const heading = React.createElement("h1" , {} , "Namaste React");
// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(heading);

const elem = <div>
  <h1>Namaste React</h1>
</div>

// TODO: JSX: HTML like syntax
let JsxElement = ()=> {
return(<h1 className="heading">
    Namaste lola
    <br/>
    <span>I am span</span>
</h1>)
}
// console.log(jsxElement);
// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(jsxElement)

// React element
let title = (
    <h1 className="heading">
        I am react element
    </h1>
)

// TODO: React functional component(or component composition) - yeh ek JS function hai joki JSX return karta hai and esko jab declare kro toh variable ka naam capital se start krnah 
const HeadingComponent = () => {
    return(
    <div>
        {elem}
        {title}
        <JsxElement/>
        <h1>This is function component</h1>
    </div>)
}

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<HeadingComponent/>)