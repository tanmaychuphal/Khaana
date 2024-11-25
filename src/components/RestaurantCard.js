import { CDN_URL } from "../utils/constants";

// const styleCard={
//     backgroundColor: "orange",
//   };

const RestaurantCard = (props) => {
    const {resData}=props;

    const{
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      sla,
    }=resData?.info;

  // console.log(props);
  return (
    <div className='res-card' style={{backgroundColor:'orange'}}>
      <img
        className='res-logo' 
        alt='res-logo'
        src={ CDN_URL + cloudinaryImageId}
      />

      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Rating: {avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  )
};

export default RestaurantCard;