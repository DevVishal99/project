import { RES_IMG_URL } from "../utils/constants";

const RetaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, cloudinaryImageId } = resData.info;

  return (
    <div className="res-card">
      <div className="res-card-img">
        <img src={RES_IMG_URL + cloudinaryImageId} alt="res-img" />
      </div>
      <div className="res-card-items">
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{avgRating}</h3>
        <h3></h3>
      </div>
    </div>
  );
};

export default RetaurantCard;
