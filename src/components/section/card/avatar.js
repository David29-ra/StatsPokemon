import React from "react";
import { Contain } from "../../container";

export const Avatar = ({name}) => {
  return (<Contain className="figure">
            <img src={`images/${name}.svg`} alt={name}/>
          </Contain>)
}