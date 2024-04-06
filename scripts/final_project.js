let info_div = document.getElementById("user_info");
let title = document.getElementById("site_title");
let info_button = document.getElementById("submit_trainer_info");
let pokemons = [];
let pokemonsSorted = [];
let trainersPokemons = [];
let trainer_Name, sprite;

info_button.addEventListener("click", () => {
  trainer_Name = document.getElementById("pkTrainerName").value;
  sprite = document.getElementsByName("pkTrainerSprite");

  for (let i = 0; i < sprite.length; i++) {
    if (sprite[i].checked) {
      sprite = "." + sprite[i].value;
      break;
    }
  }
  console.log(trainer_Name);
  console.log(sprite);
  info_div.hidden = true;
  info_div.style.display = "none";
  title.innerHTML = `Welcome to your Pokemon Trainer Card, ${trainer_Name}`;
  choosePokemon();
});

const getPokemon = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=1302");
  if (response.ok) {
    pokemons = await response.json();
  }

  pokemons.results.forEach((pokemon) => {
    pokemonsSorted.push([pokemon.name, pokemon.url]);
  });
  pokemonsSorted.sort();
};
getPokemon();

const choosePokemon = () => {
  let div = document.createElement("div");
  div.id = "pokemonSelection";
  let title = document.createElement("h2");
  title.innerHTML = "Choose your pokemon";
  let paragraph = document.createElement("p");
  paragraph.innerHTML = "Remember, your team consists of 6 pokemons";
  let choose = document.createElement("select");
  choose.id = "pokemonList";
  let button = document.createElement("button");
  button.innerHTML = "Save Pokemon";
  button.id = "savePokemon";

  choose.addEventListener("change", () => {
    showPokemon(choose.value);
  });
  let disabledOption = document.createElement("option");
  disabledOption.value = "";
  disabledOption.text = "Select your pokemon";
  disabledOption.disabled = true;
  disabledOption.selected = true;
  choose.appendChild(disabledOption);
  for (let i = 0; i < pokemonsSorted.length; i++) {
    let option = document.createElement("option");
    option.value = pokemonsSorted[i][0];
    option.text = pokemonsSorted[i][0];
    choose.appendChild(option);
  }
  div.appendChild(title);
  div.appendChild(paragraph);
  div.appendChild(choose);
  div.appendChild(button);
  let body = document.querySelector("body");
  body.appendChild(trainerCard());
  body.appendChild(div);
  savePokemon();
  console.log(trainersPokemons.length);
  if (trainersPokemons.length == 6) {
    div.hidden = true;
  }
};

const savePokemon = () => {
  let list = document.getElementById("pokemonList");
  let button = document.getElementById("savePokemon");
  button.addEventListener("click", () => {
    trainersPokemons.push(list.value);
    console.log(trainersPokemons);
    pokemonInCard();
    console.log(trainersPokemons.length);
    if (trainersPokemons.length == 6) {
      document.getElementById("pokemonSelection").hidden = true;
    }
  });
};

const trainerCard = () => {
  let trainerDiv = document.createElement("div");
  trainerDiv.id = "trainerCard";
  let name = document.createElement("h3");
  name.innerHTML = trainer_Name;
  let trainerPicture = document.createElement("img");
  trainerPicture.setAttribute("src", sprite);
  trainerDiv.appendChild(name);
  trainerDiv.appendChild(trainerPicture);

  return trainerDiv;
};

const showPokemon = async (pokemonName) => {
  let pokemonImage;
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  if (response.ok) {
    pokemonImage = await response.json();
  }
  pokemonImg = document.getElementById("SelectPokemon");
  if (!pokemonImg) {
    paragraph = document.createElement("p");
    paragraph.innerHTML = "Do you really want to choose this pokemon?";
    pokemonImg = document.createElement("img");
    pokemonImg.id = "SelectPokemon";
    pokemonImg.setAttribute("src", pokemonImage.sprites.front_default);
    document.getElementById("pokemonSelection").appendChild(paragraph);
    document.getElementById("pokemonSelection").appendChild(pokemonImg);
  } else {
    pokemonImg.setAttribute("src", pokemonImage.sprites.front_default);
  }
};

const pokemonInCard = async () => {
  card = document.getElementById("trainerCard");
  let image = "";
  let pokemonImage;
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${
      trainersPokemons[trainersPokemons.length - 1]
    }`
  );
  if (response.ok) {
    pokemonImage = await response.json();
    image = document.createElement("img");
    image.setAttribute("src", pokemonImage.sprites.front_default);
    card.appendChild(image);
  }
};
