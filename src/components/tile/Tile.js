import React from "react";

export const Tile = (props) => {
  const object = props.object
  return (
    <div className="tile-container">
      {Object.entries(object).map((entry, index) => <p
       className={index===0 ? "tile-title" : "tile"}
       key={index}>
        { 
        entry[1] ?
        entry[0] + ": " + entry[1] :
        entry[0]
        }
      </p>)}
    </div>
  );
};
