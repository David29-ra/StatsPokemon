import React from "react";
import { Header } from "./components/header/header";
import { Nav } from "./components/header/nav"
import { Logo } from "./components/header/logo";
import { Footer } from "./components/footer/footer";
import { Paragraph } from "./components/footer/paragraph";
import store from "./store";
import { Content } from "./components/section/content";
import { Tittle } from "./components/section/tittle";
import { Search } from "./components/section/search";
import { GroupSel } from "./components/section/selects";
import { Contain } from "./components/container";
import { Card } from "./components/section/card/card";

export function App() {
  return (
    <>
      <Header>
        <Logo source="./images/icons/pokelogo.svg" alt="Pokemon Logo"/>
        <Nav options={store.nav}/>
      </Header>
      <Content>
        <Tittle/>
        <Search/>
        <GroupSel filters={store.selects}/>
        <Contain className="grid">
          {store.pokemons.map((pokemon, i) => <Card key={i} pokemon={pokemon}/>)}
        </Contain>
      </Content>
      <Footer>
        {store.texts.map((text, i) => <Paragraph key={i}>{text}</Paragraph>)}
      </Footer>
    </>
  )
}
