import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect,useState} from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";

const Body = () =>{

    const [List,setList]=useState([]);
    const [filterRes,setFilterRes]=useState([])
    const [searchText,setSearchText]=useState("")

    useEffect(()=>{
      fetchData();
    },[]);

      const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      // console.log(json.data.cards[5].card.card.gridElements);  
      setList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilterRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };

      
  return List.length===0 ? <Shimmer/>
  : (
    <div className='body'>

      <div className="filter">
        <div className='search'>
          <input type="text" className="search-box" 
          value={searchText}
          onChange={(e)=>{
            setSearchText(e.target.value);
          }}/>
          <button onClick={()=>{
            const filteredRes = List.filter((res)=> res.info.name.toLowerCase().includes(searchText));
          setFilterRes(filteredRes);
          }}
          
          >Search</button>
        </div>
        
        <button className="filter-btn" 
          onClick={()=> {
            const filteredList=List.filter(
              (res)=> { return res.info.avgRating > 4.1}
          );
          setFilterRes(filteredList);
        }}>
        Top Rated Restaurant</button>
      </div>

      {/* <div className='search'>
        Search
      </div> */}
      
      <div className='res-container'>
        {
          filterRes.map((restaurant)=>(
            <Link key={restaurant.info.id}  to={"/restaurant/"+ restaurant.info.id}>
              <RestaurantCard resData={restaurant}/>
            </Link>
          ))
        }
      </div>

    </div>
  );
}
export default Body;