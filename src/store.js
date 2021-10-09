 export default {
  nav: [
    { option: "Home", path: "/home"},
    { option: "Pokédex", path: "/pokédex"},
    { option: "Legendaries", path: "/legendaries"},
    { option: "Documentation", path: "/documentation"}
  ],
  selects: [
    { text: "Type", optons: []},
    { text: "Attack", optons: []},
    { text: "Experience", optons: []}
  ],
  colors: [
    { type: "electric", color: "yellow"},
    { type: "fire", color: "red"},
    { type: "normal", color: "pink"},
    { type: "water", color: "skyblue"},
    { type: "grass", color: "green"}
  ],
  pokemon: [
    {
      name: "pachirisu",
      attack: "45",
      defense: "70",
      type: ["electric"]
    },
    {
      name: "pyroar",
      attack: "68",
      defense: "72",
      type: ["fire", "normal"],
    },
    {
      name: "pikachu",
      attack: "55",
      defense: "40",
      type: ["electric"],
    },
    {
      name: "quilava",
      attack: "64",
      defense: "58",
      type: ["fire"],
    },
    {
      name: "squirtle",
      attack: "48",
      defense: "65",
      type: ["water"],
    },
    {
      name: "charizard",
      attack: "84",
      defense: "78",
      type: ["fire", "flying"],
    },
    {
      name: "mudkip",
      attack: "70",
      defense: "50",
      type: ["water"],
    },
    {
      name: "jigglypuff",
      attack: "45",
      defense: "20",
      type: ["normal", "poison"],
    },
    {
      name: "tyranitar",
      attack: "134",
      defense: "110",
      type: ["grass", "dark"],
    },
  ],
  texts: [
    "Make with \uD83D\uDC97 \uD83D\uDE18 \uD83D\uDC9C for Laboratoria Team",
    "Pokemon 2021"
  ]
};