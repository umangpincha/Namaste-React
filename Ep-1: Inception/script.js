let root = document.querySelector("#root")
// let h1 = React.createElement("h1" , {id:"heading"} , "Hello JS")
let div = React.createElement("div" , {id:"parent"} , [
    React.createElement("div" , {id:"child"} , [
        React.createElement("h1" , {id:"heading"} , "Hello I am h1"),
        React.createElement("h2" , {id:"heading"} , "Hello I am h2")
    ]) ,

    React.createElement("div" , {id:"child2"} , [
        React.createElement("h1" , {id:"heading"} , "Hello I am h1"),
        React.createElement("h2" , {id:"heading"} , "Hello I am h2")
    ]) 


]
     
)
let myRender = ReactDOM.createRoot(root).render(div);