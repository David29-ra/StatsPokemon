import React from "react";
import store from "../../store";
import { Link } from "./link";

export const Nav = ()=>{
  let classes = ["nav"]
  return (<div className={classes.join(" ")}>{store.nav.map((navData) =>
                             <Link key={navData.option} {...navData}/>)}
         </div>)
}