import React from "react";
import { Tile } from '../tile/Tile' 

export const TileList = (props) => {
  const objects = props.objects;
  return (
    <div>
      {
        objects.map((object, index) => <Tile object={object} key={index} />)
      }
    </div>
  );
};
