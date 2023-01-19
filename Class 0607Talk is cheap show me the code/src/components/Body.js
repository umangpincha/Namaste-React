import {IMG_CDN_URL,restaurantList} from "../config"
import { useState } from "react"
//config driven UI



const RestaurantCard = ({name,cuisines,totalRatingsString,cloudinaryImageId})=>{
    // console.log(props);
    //destructuring 
    // const {cloudinaryImageId,name,cuisines,totalRatingsString} = restaurant.data.data;
    return(
        <div className="card">
        <img src={IMG_CDN_URL + cloudinaryImageId}/> 
        <h2>{name}</h2>
        <h3>{cuisines.join(",")}</h3>
        <h3>{totalRatingsString}</h3>  
        </div>
    )
}

function filterdata(searchText , restaurants){
  const filterData =  restaurants.filter((restaurant)=>restaurant.data.data.name.includes(searchText));
  // console.log(filterData);
  return filterData; 
} 
const Body = ()=>{
  //  const searchText = "KFC"
  const [searchInput , setSearchInput] = useState(""); //To create state variable, returns array
  const [restaurants , setRestaurants]  = useState(restaurantList);
    return(
        <>
          <div className="searchBox">
            <input type="text" className="search-input" placeholder="search" value={searchInput} onChange={(e)=>{
              // e.target.value => whatever u write in input
              setSearchInput(e.target.value);
            }}/>
            <button className="myBtn" onClick={()=>{
              const data = filterdata(searchInput , restaurants);
              setRestaurants(data);
            }}>Search</button>
            
          </div>
          <div className="restaurant-list">

              {
                  restaurants.map((restaurant)=>{
                      return  <RestaurantCard {...restaurant.data.data} key={restaurant.data.data.id}/>
                  })
              }
              
          </div>
        </>
    )
}

export default Body;