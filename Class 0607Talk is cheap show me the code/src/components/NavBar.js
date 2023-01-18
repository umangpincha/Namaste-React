const Title = ()=>{
    return(
     <h1 id="title">
       Food Villa
     </h1>
      )
     
}

const NavBar = ()=>{
    return(
        <div className="header">
        <Title />
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
    )
}
export default NavBar;