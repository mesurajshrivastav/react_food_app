import { CDN_URL } from "../utils/constants";

//restaurent Cards
const ResCards = (props) => {
  const { resData } = props;
  const {
    name,
    avgRating,
    cuisines,
    areaName,
    costForTwo,
    cloudinaryImageId,
    sla,
  } = resData?.info;
  const resImg = CDN_URL + cloudinaryImageId;
  return (
    <div className="m-4 p-2 w-56 bg-gray-100 hover:bg-gray-200 rounded-lg shadow-xl">
      <img className="rounded-lg h-44 w-52" src={resImg} />
      <div className="res-text">
        <h3 className="font-semibold py-2 text-lg">{name}</h3>
        <h4 className="font-medium text-sm justify-between ">
          <button className="bg-green-700 p-1 justify-center items-center rounded-md text-white  mx-1 ">
            &#x2605; {avgRating}
          </button>
          .{sla.deliveryTime} mins
          {" -    " + costForTwo}
        </h4>
        {/* <h5>{costForTwo}</h5> */}
        <h5 className="text-sm">{cuisines.join(", ")}</h5>
        <h5 className="text-sm">{areaName}</h5>
      </div>
    </div>
  );
};

//Higher order function

export const withPromotedLabel = (ResCards) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-4 p-0.5 rounded-lg">
          Promoted
        </label>
        <ResCards {...props} />
      </div>
    );
  };
};

export default ResCards;
