import React from "react";

export const Footer = ({children}) => {
  let classes = ["footer", "flex", "align-center", "justify-center"]

  return <footer className={classes.join(" ")}><Draw>{children}</Draw></footer>
}

const Draw = ({children}) => {
  let classes = ["draw", "flex", "align-center", "justify-between"]
  return <div className={classes.join(" ")}>{children}</div>
}