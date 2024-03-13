import "./singleFlower.css";
import { PiStarLight } from "react-icons/pi";
const SingleFlower = ({ flower }) => {
  return (
    <div className="flower-cont">
      <div className="flower-up">
        <PiStarLight fontSize={25} color="grey" />
      </div>
      <div className="flower-down">
        <p className="flower-name">{flower.name}</p>
        <p className="flower-latin">{flower.latin_name}</p>
        <button className="flower-sighting">
          {flower.sightings} sightings
        </button>
      </div>
    </div>
  );
};

export default SingleFlower;
