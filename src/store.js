 export default {
  nav: [
    { option: "Home", path: "/home"},
    { option: "Pokédex", path: "/pokédex"},
    { option: "Legendaries", path: "/legendaries"},
    { option: "Documentation", path: "/documentation"}
  ],
  selects: [
    ["type", "fire", "water", "grass"],
    ["Attack"],
    ["Experience"]
  ],
  colors: {
    electric: "yellow",
    fire: "red",
    normal: "pink",
    water: "skyblue",
    grass: "green"
  },
  pokemons: [
    {
      name: "pachirisu",
      states: [
        {skill: "attack", value: "45"},
        {skill: "defense", value: "70"},
      ],
      types: ["electric"]
    },
    {
      name: "pyroar",
      states: [
        {skill: "attack", value: "68"},
        {skill: "defense", value: "72"},
      ],
      types: ["fire", "normal"],
    },
    {
      name: "pikachu",
      states: [
        {skill: "attack", value: "55"},
        {skill: "defense", value: "40"},
      ],
      types: ["electric"],
    },
    {
      name: "quilava",
      states: [
        {skill: "attack", value: "64"},
        {skill: "defense", value: "58"},
      ],
      types: ["fire"],
    },
    {
      name: "squirtle",
      states: [
        {skill: "attack", value: "48"},
        {skill: "defense", value: "65"},
      ],
      types: ["water"],
    },
    {
      name: "charizard",
      states: [
        {skill: "attack", value: "84"},
        {skill: "defense", value: "78"},
      ],
      types: ["fire", "flying"],
    },
    {
      name: "mudkip",
      states: [
        {skill: "attack", value: "70"},
        {skill: "defense", value: "50"},
      ],
      types: ["water"],
    },
    {
      name: "jigglypuff",
      states: [
        {skill: "attack", value: "45"},
        {skill: "defense", value: "20"},
      ],
      types: ["normal", "poison"],
    },
    {
      name: "tyranitar",
      states: [
        {skill: "attack", value: "134"},
        {skill: "defense", value: "110"},
      ],
      types: ["grass", "dark"],
    },
  ],
  texts: [
    "Make with \uD83D\uDC97 \uD83D\uDE18 \uD83D\uDC9C for Laboratoria Team",
    "Pokemon 2021"
  ]
};