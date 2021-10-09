import React from "react";
import { Draw } from "../container";

export const Footer = ({children}) => {
  let classes = ["footer", "flex", "align-center", "justify-center"]

  return <footer className={classes.join(" ")}><Draw>{children}</Draw></footer>
}
