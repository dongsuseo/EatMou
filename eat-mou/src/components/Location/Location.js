import React, { useState } from "react";
import { useSelector } from "react-redux";

import LocationKitchenList from "./LocationKitchenList";

const Location = (props) => {
  const kitchen = useSelector((state) => state);

  const [distance, setDistance] = useState(1000);

  const selectDistance = (event) => {
    setDistance(event.target.value);
  };

  return (
    <div>
      <h3>Back</h3>
      <h4>서울시 광진구 광나루토 17길 52</h4>
      <select onChange={selectDistance}>
        <option value="100">100</option>
        <option value="300">300</option>
        <option value="600">600</option>
      </select>
      {console.log(kitchen)}
      {kitchen.map((item) => (
        <LocationKitchenList
          name={item.name}
          openTime={item.openTime}
          closeTime={item.closeTime}
          telephone={item.telephone}
          distance={item.distance}
          selectDistance={distance}
          address={item.address}
          dangol={item.dangol}
          today={item.today}
          menu={item.menu}
          src={item.src}
        />
      ))}
    </div>
  );
};

export default Location;
