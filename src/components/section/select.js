import React from "react";
import { Option } from "./option";

export const Select = ({options}) => {
  return <select>{options.map(option => <Option key={option} value={option} children={option}/>)}</select>
}
