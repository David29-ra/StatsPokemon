 export default {
  nav: [
    { option: "Home", path: "/#"},
    { option: "Pokédex", path: "/#"},
    { option: "Legendaries", path: "/#"},
    { option: "Documentation", path: "/#"}
  ],
  selects: [
    ["type", "fire", "water", "grass"],
    ["Attack"],
    ["Experience"]
  ],
  colors: {
    electric: "linear-gradient(180deg, #F2CB07 0%, #F2C307 41.15%, #F2B807 100%)",
    fire: "linear-gradient(270deg, #B33327 0.15%, #D93E30 100%)",
    water: "linear-gradient(90deg, #6aceff 0, #5ac6fa 50%, #48bef4 100%)",
    fairy: "linear-gradient(270deg, #F89EAE 0.15%, #F4B5C1 100%)",
    poison: "linear-gradient(90deg, #c75fa4 0, #b95a9e 25%, #aa5598 50%, #9b5091 75%, #8e4b8b 100%)",
    dragon: "linear-gradient(90deg, #a47bff 0, #7766ee 50%, #4b51c7 100%)",
    rock: "linear-gradient(90deg, #cebe80 0, #bbaa66 50%, #a8964d 100%)",
    dark: "linear-gradient(90deg, #836757 0, #7d5f4e 25%, #775544 50%, #714b3b 75%, #6b4333 100%)",
    flying: "linear-gradient(90deg, #a2abff 0, #8898ff 50%, #6c85f0 100%)",
    normal:  "linear-gradient(90deg, #bdbcb2 0, #aaaa99 50%, #969881 100%)",
    psychic: "linear-gradient(90deg, #ff7e8a 0, #ff718f 16.67%, #ff6394 33.33%, #ff5499 50%, #f4469f 66.67%, #e83ba7 83.33%, #d934b1 100%)",
    ghost: "linear-gradient(90deg, #7e78c9 0, #6666bb 50%, #4c55ad 100%)",
    grass: "linear-gradient(90deg, #91e372 0, #7cdb6d 25%, #64d368 50%, #47ca63 75%, #1dc361 100%)",
    ice: "linear-gradient(90deg, #65e0ff 0, #66ccff 50%, #65b8e6 100%)",
    fighting: "linear-gradient(90deg, #cf6446 0, #c55c45 25%, #bb5444 50%, #b04c43 75%, #a64541 100%)",
    ground: "linear-gradient(90deg, #edce5b 0, #ddbb54 50%, #cca84d 100%)",
    bug: "linear-gradient(90deg, #c4c337 0, #b8bf2d 25%, #aabb21 50%, #9cb714 75%, #8eb302 100%)",
    steel: "linear-gradient(90deg, #b7b6bf 0, #aaaabb 50%, #9d9eb7 100%)",
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
      types: ["dragon", "flying"]
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