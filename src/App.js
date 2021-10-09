import React from "react";
import { Header } from "./components/header/header";
import { Nav } from "./components/header/nav"
import { Logo } from "./components/header/logo";
import { Footer } from "./components/footer/footer";
import { Paragraph } from "./components/footer/paragraph";
import store from "./store";

export function App() {
  return (
    <>
      <Header>
        <Logo source="./images/icons/pokelogo.svg" alt="Pokemon Logo"/>
        <Nav/>
      </Header>

      <Footer>
        {store.texts.map((text, i) => <Paragraph key={i}>{text}</Paragraph>)}
      </Footer>
    </>
  )
}
