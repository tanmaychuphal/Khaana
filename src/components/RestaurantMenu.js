import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () =>{

    const {resId}=useParams();
    const [resInfo,setResInfo]=useState(null)

    useEffect(()=>{
        fetchMenu();
    },[]);
    
    const fetchMenu=async () =>{
        const data=await fetch(MENU_API+resId);
        const json=await data.json();
        setResInfo(json.data)
    }
    
    if(resInfo===null) return <Shimmer/>
    // console.log(resInfo)

    const{
        name,
        cuisines,
        costForTwoMessage,
    }=resInfo?.cards[2]?.card?.card?.info;

    const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card

    // console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR)
    // return (resInfo===null) ? <Shimmer/>
    // : (
        return (
        <div className="menu">
            <h1>{name}</h1>
            <h4>{cuisines.join(", ")}</h4>
            <p>{costForTwoMessage}</p>
            <ul>
                <h2>Recommended</h2>
                <li>
                    {
                        itemCards.map((item => 
                            <li key={item.card.info.id}>
                                {item.card.info.name}-{"  Rs."}
                                {item.card.info.price}
                            </li>
                        ))
                    }
                </li>
            </ul>
        </div>
    )
};

export default RestaurantMenu