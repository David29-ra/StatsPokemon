import React from "react";
import { capitalize } from "../../../helpers/capitalize";
import store from "../../../store";
import { Contain, Oncard } from "../../container";
import { Paragraph } from "../../footer/paragraph";
import { Avatar } from "./avatar";
import { Name } from "./name";

export const Card = ({pokemon}) => {
  return (<Contain className="pokecard flex" style={{background: store.colors[pokemon.types[0]]}}>
            <Data name = {capitalize(pokemon.name)} states = {pokemon.states} types = {pokemon.types}/>
            <Avatar name={pokemon.name}/>
          </Contain>)
}

const Data = ({name, states, types}) => {
  return <Contain className="pokedata">
    <Name children={name}/>
    <States states={states}/>
    <Power types={types}/>
  </Contain>
}

const States = ({states}) => {
  return (<Contain className="states">
            {states.map(state => <Eachstate key={state.skill} value={state.value} skill={state.skill}/>)}
          </Contain>)
}

const Eachstate = ({value, skill}) => {
  return (<Contain className="each-state">
            <Oncard className="circle" children={value}/>
            <Paragraph children={capitalize(skill)}/>
          </Contain>)
}

const Power = ({types}) => {
  return (<Contain className="power flex" >
    {types.map(type => <Oncard key={type} style={{background: `${store.colors[type]}`}} className="type" children={capitalize(type)}/>)}
  </Contain>)
}


