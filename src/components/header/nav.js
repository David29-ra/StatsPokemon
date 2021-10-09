import React from "react";
import store from "../../store";
import { Link } from "./link";

export const Nav = ({options}) => {
  let classes = ["nav"]
  return (<div className={classes.join(" ")}>{options.map((navData) =>
                             <Link key={navData.option} {...navData}/>)}
         </div>)
}