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
    electric: "#fc3",
    fire: "linear-gradient(270deg, #B33327 0.15%, #D93E30 100%)",
    water: "linear-gradient(270deg, #5BC7FA 0.15%, #35BAFF 100%)",
    fairy: "linear-gradient(270deg, #F89EAE 0.15%, #F4B5C1 100%)",
    poison: "#a59",
    dragon: "#76e",
    rock: "#ba6",
    dark: "#754",
    flying: "#89f",
    normal:  "#aa9",
    psychic: "#f59",
    ghost: "#66b",
    grass: "#7c5",
    ice: "#6cf",
    fighting: "#b54",
    ground: "#db5",
    bug: "#ab2",
    steel: "#aab",
    youtuber: "linear-gradient(180deg, #FE0000 16.66%,#FD8C00 16.66%, 33.32%,#FFE500 33.32%, 49.98%,#119F0B 49.98%, 66.64%,#0644B3 66.64%, 83.3%,#C22EDC 83.3%)",
    legendary: "linear-gradient(269.46deg, #B57E10 -7.62%, #B57E10 13.9%, #F9DF7B 28.5%, #FFF3A6 45.42%, #F9DF7B 62.17%, #B57E10 81.71%)"
  },
  pokemons: [
    {
      name: "chimchar",
      states: [
        {skill: "attack", value: "85"},
        {skill: "defense", value: "100"},
      ],
      types: ["fire"]
    },
    {
      name: "monferno",
      states: [
        {skill: "attack", value: "85"},
        {skill: "defense", value: "100"},
      ],
      types: ["fire", "fighting"]
    },
    {
      name: "infernape",
      states: [
        {skill: "attack", value: "85"},
        {skill: "defense", value: "100"},
      ],
      types: ["fire", "fighting"]
    },
    {
      name: "dratini",
      states: [
        {skill: "attack", value: "64"},
        {skill: "defense", value: "45"},
      ],
      types: ["dragon"]
    },
    {
      name: "dragonair",
      states: [
        {skill: "attack", value: "84"},
        {skill: "defense", value: "65"},
      ],
      types: ["dragon"]
    },
    {
      name: "dragonite",
      states: [
        {skill: "attack", value: "134"},
        {skill: "defense", value: "95"},
      ],
      types: ["dragon"]
    },
    {
      name: "mew",
      states: [
        {skill: "attack", value: "100"},
        {skill: "defense", value: "100"},
      ],
      types: ["psychic"]
    },
    {
      name: "mewtwo",
      states: [
        {skill: "attack", value: "110"},
        {skill: "defense", value: "90"},
      ],
      types: ["psychic"]
    },
    {
      name: "articuno",
      states: [
        {skill: "attack", value: "85"},
        {skill: "defense", value: "100"},
      ],
      types: ["ice", "flying"]
    },
    {
      name: "diancie",
      states: [
        {skill: "attack", value: "100"},
        {skill: "defense", value: "150"},
      ],
      types: ["rock", "fairy"]
    },
    // {
    //   name: "tapir-590",
    //   states: [
    //     {skill: "attack", value: "73"},
    //     {skill: "defense", value: "70"},
    //   ],
    //   types: ["youtuber"]
    // },
    {
      name: "hypno",
      states: [
        {skill: "attack", value: "73"},
        {skill: "defense", value: "70"},
      ],
      types: ["psychic"]
    },
    {
      name: "eevee",
      states: [ 
        {skill: "attack", value: "55"},
        {skill: "defense", value: "50"},
      ],
      types: ["normal"]
    },
    {
      name: "vaporeon",
      states: [
        {skill: "attack", value: "65"},
        {skill: "defense", value: "60"},
      ],
      types: ["water"]
    },
    {
      name: "jolteon",
      states: [
        {skill: "attack", value: "65"},
        {skill: "defense", value: "60"},
      ],
      types: ["electric"]
    },
    {
      name: "flareon",
      states: [
        {skill: "attack", value: "130"},
        {skill: "defense", value: "60"},
      ],
      types: ["fire"]
    },
    {
      name: "espeon",
      states: [
        {skill: "attack", value: "65"},
        {skill: "defense", value: "60"},
      ],
      types: ["psychic"]
    },
    {
      name: "umbreon",
      states: [
        {skill: "attack", value: "65"},
        {skill: "defense", value: "110"},
      ],
      types: ["dark"]
    },
    {
      name: "leafeon",
      states: [
        {skill: "attack", value: "110"},
        {skill: "defense", value: "130"},
      ],
      types: ["grass"]
    },
    {
      name: "glaceon",
      states: [
        {skill: "attack", value: "60"},
        {skill: "defense", value: "110"},
      ],
      types: ["ice"]
    },
    {
      name: "latias",
      states: [
        {skill: "attack", value: "80"},
        {skill: "defense", value: "90"},
      ],
      types: ["dragon", "psychic"]
    },
    {
      name: "latios",
      states: [
        {skill: "attack", value: "90"},
        {skill: "defense", value: "80"},
      ],
      types: ["dragon", "psychic"]
    },
    {
      name: "moltres",
      states: [
        {skill: "attack", value: "100"},
        {skill: "defense", value: "90"},
      ],
      types: ["fire", "flying"]
    },
    {
      name: "xerneas",
      states: [
        {skill: "attack", value: "131"},
        {skill: "defense", value: "95"},
      ],
      types: ["fairy"]
    },
    {
      name: "zapdos",
      states: [
        {skill: "attack", value: "90"},
        {skill: "defense", value: "85"},
      ],
      types: ["electric", "flying"]
    },
    {
      name: "rayquaza",
      states: [
        {skill: "attack", value: "150"},
        {skill: "defense", value: "90"},
      ],
      types: ["dragon", "flying"]
    },
    {
      name: "solgaleo",
      states: [
        {skill: "attack", value: "100"},
        {skill: "defense", value: "90"},
      ],
      types: ["psychic", "steel"]
    },
    {
      name: "kecleon",
      states: [
        {skill: "attack", value: "90"},
        {skill: "defense", value: "70"},
      ],
      types: ["normal"]
    },
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
      name: "psyduck",
      states: [
        {skill: "attack", value: "52"},
        {skill: "defense", value: "48"},
      ],
      types: ["water"],
    },
    {
      name: "lugia",
      states: [
        {skill: "attack", value: "90"},
        {skill: "defense", value: "130"},
      ],
      types: ["psychic", "flying"],
    },
    {
      name: "cloyster",
      states: [
        {skill: "attack", value: "95"},
        {skill: "defense", value: "180"},
      ],
      types: ["water", "ice"],
    },
    {
      name: "ho-oh",
      states: [
        {skill: "attack", value: "130"},
        {skill: "defense", value: "90"},
      ],
      types: ["fire", "flying"],
    },
    {
      name: "cyndaquil",
      states: [
        {skill: "attack", value: "52"},
        {skill: "defense", value: "43"},
      ],
      types: ["fire"],
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
      name: "typhlosion",
      states: [
        {skill: "attack", value: "84"},
        {skill: "defense", value: "78"},
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
      name: "wartortle",
      states: [
        {skill: "attack", value: "63"},
        {skill: "defense", value: "80"},
      ],
      types: ["water"],
    },
    {
      name: "blastoise",
      states: [
        {skill: "attack", value: "83"},
        {skill: "defense", value: "100"},
      ],
      types: ["water"],
    },
    {
      name: "charmander",
      states: [
        {skill: "attack", value: "52"},
        {skill: "defense", value: "43"},
      ],
      types: ["fire", "flying"],
    },
    {
      name: "charmeleon",
      states: [
        {skill: "attack", value: "64"},
        {skill: "defense", value: "58"},
      ],
      types: ["fire", "flying"],
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
      name: "marshtomp",
      states: [
        {skill: "attack", value: "85"},
        {skill: "defense", value: "70"},
      ],
      types: ["water", "ground"],
    },
    { 
      name: "swampert",
      states: [
        {skill: "attack", value: "110"},
        {skill: "defense", value: "90"},
      ],
      types: ["water", "ground"],
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
      name: "mankey",
      states: [
        {skill: "attack", value: "80"},
        {skill: "defense", value: "35"},
      ],
      types: ["fighting"],
    },
    {
      name: "primeape",
      states: [
        {skill: "attack", value: "105"},
        {skill: "defense", value: "60"},
      ],
      types: ["fighting"],
    },
    {
      name: "larvitar",
      states: [
        {skill: "attack", value: "64"},
        {skill: "defense", value: "50"},
      ],
      types: ["rock", "ground"],
    },
    {
      name: "pupitar",
      states: [
        {skill: "attack", value: "84"},
        {skill: "defense", value: "70"},
      ],
      types: ["rock", "ground"],
    },
    {
      name: "tyranitar",
      states: [
        {skill: "attack", value: "134"},
        {skill: "defense", value: "110"},
      ],
      types: ["rock", "dark"],
    },
    {
      name: "bulbasaur",
      states: [
        {skill: "attack", value: "49"},
        {skill: "defense", value: "49"},
      ],
      types: ["grass", "poison"],
    },
    {
      name: "ivysaur",
      states: [
        {skill: "attack", value: "62"},
        {skill: "defense", value: "63"},
      ],
      types: ["grass", "poison"],
    },
    {
      name: "venusaur",
      states: [
        {skill: "attack", value: "82"},
        {skill: "defense", value: "83"},
      ],
      types: ["grass", "poison"],
    },
    {
      name: "caterpie",
      states: [
        {skill: "attack", value: "30"},
        {skill: "defense", value: "35"},
      ],
      types: ["bug"],
    },
    {
      name: "metapod",
      states: [
        {skill: "attack", value: "20"},
        {skill: "defense", value: "55"},
      ],
      types: ["bug"],
    },
    {
      name: "butterfree",
      states: [
        {skill: "attack", value: "45"},
        {skill: "defense", value: "50"},
      ],
      types: ["bug", "flying"],
    },
    {
      name: "wurmple",
      states: [
        {skill: "attack", value: "45"},
        {skill: "defense", value: "35"},
      ],
      types: ["bug"],
    },
    {
      name: "silcoon",
      states: [
        {skill: "attack", value: "35"},
        {skill: "defense", value: "55"},
      ],
      types: ["bug"],
    },
    {
      name: "beautifly",
      states: [
        {skill: "attack", value: "70"},
        {skill: "defense", value: "50"},
      ],
      types: ["bug", "flying"],
    },
    {
      name: "cascoon",
      states: [
        {skill: "attack", value: "35"},
        {skill: "defense", value: "55"},
      ],
      types: ["bug"],
    },
    {
      name: "dustox",
      states: [
        {skill: "attack", value: "50"},
        {skill: "defense", value: "70"},
      ],
      types: ["bug", "poison"],
    },
    {
      name: "gengar",
      states: [
        {skill: "attack", value: "65"},
        {skill: "defense", value: "60"},
      ],
      types: ["ghost", "poison"],
    },
    {
      name: "misdreavus",
      states: [
        {skill: "attack", value: "60"},
        {skill: "defense", value: "60"},
      ],
      types: ["ghost"],
    },
    {
      name: "onix",
      states: [
        {skill: "attack", value: "45"},
        {skill: "defense", value: "160"},
      ],
      types: ["rock", "ground"],
    },
    {
      name: "steelix",
      states: [
        {skill: "attack", value: "85"},
        {skill: "defense", value: "200"},
      ],
      types: ["steel", "ground"],
    },
  ],
  texts: [
    "Make with \uD83D\uDC97 \uD83D\uDE18 \uD83D\uDC9C for Monito Inc.",
    "Pokemon 2021"
  ]
};