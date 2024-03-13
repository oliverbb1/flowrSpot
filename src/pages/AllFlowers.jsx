import React, { useEffect, useState } from "react";
import { performGetAllFlowers } from "../store/flowers/slice";
import { useSelector, useDispatch } from "react-redux";
import { selectAllFlowers } from "../store/flowers/selectors";
import SingleFlower from "../components/SingleFlower";
import "./allFlowers.css";

const AllFlowers = () => {
  const dispatch = useDispatch();
  const allFlowers = useSelector(selectAllFlowers);

  useEffect(() => {
    dispatch(performGetAllFlowers());
    // console.log(allFlowers);
  }, []);

  return (
    <div className="flower-flex">
      {allFlowers.map((flower) => {
        return (
          <div
            key={flower.id}
            className="flower-container"
            style={{ backgroundImage: `url(${flower.profile_picture})` }}>
            <SingleFlower flower={flower} />
          </div>
        );
      })}
    </div>
  );
};

export default AllFlowers;
