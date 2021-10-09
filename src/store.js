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
    electric: "#F2CB07",
    fire: "linear-gradient(270deg, #B33327 0.15%, #D93E30 100%)",
    water: "linear-gradient(270deg, #5BC7FA 0.15%, #35BAFF 100%)",
    fairy: "linear-gradient(270deg, #F89EAE 0.15%, #F4B5C1 100%)",
    poison: "#E95AC9",
    dragon: "#76e",
    rock: "#B18A24",
    dark: "#775C33",
    flying: "#B060D6",
    normal:  "#999999",
    psychic: "#f59",
    ghost: "#66b",
    legendary: "linear-gradient(269.46deg, #B57E10 -7.62%, #B57E10 13.9%, #F9DF7B 28.5%, #FFF3A6 45.42%, #F9DF7B 62.17%, #B57E10 81.71%)"
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
      types: ["normal", "fairy"],
    },
    {
      name: "tyranitar",
      states: [
        {skill: "attack", value: "134"},
        {skill: "defense", value: "110"},
      ],
      types: ["rock", "dark"],
    },
  ],
  texts: [
    "Make with \uD83D\uDC97 \uD83D\uDE18 \uD83D\uDC9C for Laboratoria Team",
    "Pokemon 2021"
  ]
};