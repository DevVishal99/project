const RetaurantCard = () => {
  return (
    <div className="res-card">
      <div className="res-card-img">
        <img
          src="https://b.zmtcdn.com/data/pictures/5/19064995/e77f6d8e69c6b5f23548548b806cd709_featured_v2.jpg"
          alt="res-img"
        />
      </div>
      <div className="res-card-items">
        <h2>Restaurant Name</h2>
        <h3>cusines</h3>
        <h3>Ratings</h3>
        <h3>Cost for two</h3>
      </div>
    </div>
  );
};

export default RetaurantCard;
