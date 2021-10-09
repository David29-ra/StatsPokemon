import React from "react";
import { Draw } from "../container";

export const Content = ({ children }) => {
  let classes = ["section", "flex", "justify-center", "align-center"]

  return <section className={classes.join(" ")}><Draw className="column">{children}</Draw></section>
}