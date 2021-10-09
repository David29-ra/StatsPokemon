import React from "react";
import { SelectDiv } from "../container";
import { Select } from "./select";

export const GroupSel = ({filters}) => {
  return <SelectDiv>{filters.map((filter, i) => <Select key={i} options={filter}/>)}</SelectDiv>
}
