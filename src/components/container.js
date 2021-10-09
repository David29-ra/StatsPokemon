import React from "react";

export const Draw = ({className, children}) => {
  let classes = ["draw", "flex", "align-center", "justify-between"]
  if(className) classes = [...classes, className]
  
  return <div className={classes.join(" ")}>{children}</div>
}

export const SelectDiv = ({children}) => {
  let classes = ["flex", "section-select"]
  
  return <div className={classes.join(" ")}>{children}</div>
}

export const Contain = ({className, children, style}) => {
  let classes = []
  if(className) classes = [...classes, className]
  return <div style ={style} className={classes.join(" ")}>{children}</div>
}

export const Oncard = ({className, children, style}) => {
  let classes = ["flex", "align-center", "justify-center"]

  if(className) classes = [className, ...classes]

  return <div style={style} className={classes.join(" ")} >{children}</div>
}
