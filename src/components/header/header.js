import React from "react";
import { Draw } from "../container";

export const Header = ({children}) => {
  let classes = ["header", "flex", "align-center", "justify-center"]

  return <header className={classes.join(" ")}><Draw>{children}</Draw></header>
}
