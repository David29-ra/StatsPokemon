import React from "react";

export const Header = ({children}) => {
  let classes = ["header", "flex", "align-center", "justify-center"]

  return <header className={classes.join(" ")}><Draw>{children}</Draw></header>
}

const Draw = ({children}) => {
  let classes = ["draw", "flex", "align-center", "justify-between"]
  return <div className={classes.join(" ")}>{children}</div>
}